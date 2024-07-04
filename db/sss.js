"use client"
import { useSession, signIn, signOut } from "next-auth/react";
export const { data: sessionap } = useSession();
export const userimage = sessionap.user.image;
export const userkaname = sessionap.user.name;

