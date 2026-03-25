import Image from "next/image"

export default function Hero () {
  return (
    <div className="h-120 w-full bg-gray-200 flex flex-row items-center justify-center md:flex-row">
      <div className="w-[80%] md:w-[50%]">
        <div className="flex flex-col md:w-[50%] text-center">
          <h1 className="text-5xl font-bold">
            Teste suas
          </h1>
          <p>
            <span className="text-5xl font-bold inline-block bg-clip-text text-transparent bg-linear-to-br from-cyan-500 to-blue-500">habilidades dev</span>
          </p>
          <p className="text-md md:text-sm mt-8 text-gray-700">
            Escolha uma linguagem, selecione seu nível e prove seus conhecimentos com quizzes dinâmicos gerados de um banco extenso de questões.
          </p>
        </div>
      </div>
      <div>
        <Image alt="Código" height={300} width={300} src={'/coding-binary-svgrepo-com.svg'} />
      </div>
    </div>
  )
}