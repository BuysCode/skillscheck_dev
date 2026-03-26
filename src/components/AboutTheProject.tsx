import Image from "next/image";
import { Badge } from "./ui/badge";

export default function AboutTheProject() {
  return (
    <div id="sobre" className="w-full bg-gray-300/90 flex flex-col items-center justify-center gap-6 py-10">
      <Badge className="mt-8 p-4 text-blue-500 border border-blue-500 bg-cyan-400/30 font-bold">
        Sobre o Projeto
      </Badge>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-[80%] md:w-[50%]">
          <div className="flex flex-col md:w-[50%] text-justify">
            <p>
              O <span className="text-xl font-bold inline-block bg-clip-text text-transparent bg-linear-to-br from-cyan-500 to-blue-500">SkillsCheck</span> foi desenvolvido para um projeto coletivo, abordando sobre o tema prototipagem. Porém, decidimos elevar o nível da atividade, com o intuito de criar um projeto real e pronto para ser usado por desenvolvedores de todo o país.
            </p>
          </div>
        </div>
        <div>
          <Image alt="Faculdade" height={300} width={300} src={'/school-svgrepo-com.svg'} />
        </div>
      </div>
    </div>
  )
}