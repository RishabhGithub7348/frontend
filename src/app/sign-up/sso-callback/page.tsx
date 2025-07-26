import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'

export const dynamic = 'force-dynamic'

export default function SSOCallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-white">Completing sign up...</p>
      </div>
      <AuthenticateWithRedirectCallback 
        afterSignUpUrl="/voice"
      />
    </div>
  )
}