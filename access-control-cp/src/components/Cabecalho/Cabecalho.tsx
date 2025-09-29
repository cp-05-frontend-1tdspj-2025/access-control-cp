import Menu from "../Menu/Menu";


export default function Cabecalho() {
    return (
        <header className="w-full bg-blue-200 flex flex-col justify-around items-center h-[80px] ">
            <h1 className="text-2xl font-bold text-blue-800">Control Acess</h1>
            <Menu/>
        </header>
    );
}