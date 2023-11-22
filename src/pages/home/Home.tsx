import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos"

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Veja aqui os mais diversos produtos!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white border-white 
                                            border-solid border-2 py-2 px-4'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://cdn.discordapp.com/attachments/1133193148164743220/1176863166362296371/Como-aumentar-vendas-na-farmacia-Hilab.jpg?ex=65706a3b&is=655df53b&hm=84fb071ac0a149b8bf4b025f5a5fdb0944fc4514f21ea8e20ecb4f7024642fb0&"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaProdutos />
        </>
    )
}

export default Home