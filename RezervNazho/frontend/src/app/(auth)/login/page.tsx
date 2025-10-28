import React from 'react'
import Container from '../../components/Container'

export default function LoginPage() {
  return (
    <Container>
      <div className="max-w-md mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-4">ورود به حساب</h2>
        <form className="space-y-4">
          <input placeholder="ایمیل" className="w-full p-3 border rounded" />
          <input placeholder="رمز عبور" type="password" className="w-full p-3 border rounded" />
          <button className="w-full py-3 bg-primary text-white rounded">ورود</button>
        </form>
      </div>
    </Container>
  )
}
