import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Logo from './logo'
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from './ui/button';

const NoAccessToCart = ({
    details ="Log in to view your cart items and checkout. Don't miss out on your favorite product!",
}:{
    details?: string;
}) => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4">
        <Card className="w-full max-w-md p-5">
            <CardHeader className="flex items-center flex-col gap-1">
                <Logo/>
                <CardTitle className="text-2xl fot-bold text-center">Welcom Back!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center font-medium text-darkColor/80">
                    {details}
                </p>
                <SignInButton mode ="modal" >
                <Button className="w-full" size="lg">
                    Sign In
                </Button>
            </SignInButton>
            </CardContent>
             <div className="text-center text-sm text-muted-foreground">
                Don&rsquo;t have an account
             </div>
             <SignUpButton mode="modal">
                <Button className="w-full" variant="outline" size="lg">
                    Create an account
                </Button>
             </SignUpButton>
        </Card>
    </div>
  )
}

export default NoAccessToCart