import { Button } from '@/components/ui/Button'

export default async function Home() {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center text-center">
                    <h1 className="mr-3 text-5xl font-semibold"> Chat my pdf</h1>
                </div>
            </div>
        </div>
    )
}
