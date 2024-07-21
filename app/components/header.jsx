export default function Header (){
    return(
        <header className="p-5 bg-slate-600 flex justify-between">
            <div className="left-header">
                <h1 className="font-bold text-2xl text-white"><a href="/">Sistem Informasi Pondok Pesantren</a></h1>
            </div>
            <div className="right-header">
                <a href="/login" className="font-semibold text-lg py-3 px-4 m-5 bg-slate-300 rounded-lg hover:text-white hover:bg-slate-800 transition-colors duration-200 ease-in">Login</a>
            </div>
        </header>
    )
}