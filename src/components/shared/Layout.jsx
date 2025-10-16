export default function Layout({ children }) {
    // todo: handle screen width

    return <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-100 ">
            {children}
        </div>
    </div>
}