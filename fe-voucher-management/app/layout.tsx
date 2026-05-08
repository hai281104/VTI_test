// app/layout.tsx
import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'Voucher Management',
    description: 'Mini Management System',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
        <body className="antialiased min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <h1 className="font-bold text-2xl text-blue-600 tracking-tight">AdminPanel</h1>
                        <div className="hidden md:flex space-x-4">
                            <Link href="/vouchers" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium transition-colors">Quản lý Voucher</Link>
                            <Link href="/users" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium transition-colors">Khách hàng</Link>
                            <Link href="/usages" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium transition-colors">Cấp phát & Lịch sử</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            {children}
        </main>
        </body>
        </html>
    );
}