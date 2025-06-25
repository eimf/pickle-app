import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";

// Define Zod schema for input validation
const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validationResult = signInSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // If user doesn't exist or password doesn't match
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create session (simplified version - in a real app you might want to use JWT or a session library)
    // We'll just set a cookie with the user ID for now
    const sessionId = crypto.randomUUID();
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    // Create response with cookies
    const response = NextResponse.json({ 
      message: "Signed in successfully", 
      user: userWithoutPassword 
    });
    
    // Set session cookie
    response.cookies.set({
      name: 'session',
      value: sessionId,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    // Set user ID cookie
    response.cookies.set({
      name: 'userId',
      value: user.id,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    
    return response;

    // Response is handled in the cookie setting section above
  } catch (error) {
    console.error("Error during sign in:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
