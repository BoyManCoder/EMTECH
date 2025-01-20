function NavBar() {
    return (
        <>
            <section className="w-screen">
                <div className="w-full h-6 flex justify-center items-center text-white bg-gray-900">
                    <h6 className="text-xs" >Follow us on Instagram and LinkedIn to stay connected</h6>
                    </div>
                <nav className="w-full flex flex-col font-robotoSlab justify-center items-center">
                    <div className="text-3xl p-4 tracking-widest">
                        <div className="w-full">
                            <h1>EMTECH</h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center border-gray-500 border-b-2 bg-main underline font-medium text-secondary">
                    <div className="w-10/12 md:w-2/5 flex flex-row justify-around p-1">
                        <a href="#found">
                            <h3>Founders</h3>
                        </a>
                        <a href="#about">
                            <h3>Mission</h3>
                        </a>
                        <a href="#program">
                            <h3>Programs</h3>
                        </a>
                        <a href="#contact">
                            <h3>Contact</h3>
                        </a>
</div>

                    </div>
                </nav>
            </section>
        </>
    );
}

export default NavBar;
