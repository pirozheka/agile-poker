'use client'

export default function NotFound() {
    return (
        <div className="bg-white h-screen">
            <div className="bg-white mt-auto">
                <video className="w-full h-screen object-cover" autoPlay>
                    <source src="/img/notfound.mp4" type="video/mp4" />
                    <source src="/img/notfound.webm" type="video/webm" />
                </video>
            </div>
        </div>
    )
}