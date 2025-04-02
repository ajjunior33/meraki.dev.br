export type Project = {
  id: string
  name: string
  description: string
  image: string
  customerLogo: string;
  longDescription: string
  technologies: string[]
  clientTestimonial?: string
}

export const projects: Project[] = [
  {
    id: "ags",
    name: "AGS | Asset Guardian System",
    customerLogo: "/nexux-logo.png",
    description: "Sistema de gerenciamento de ativos Industriais",
    image: "/ags.svg",
    longDescription:
      "O AGS (Asset Guardian System) é um sistema voltado para o setor industrial, projetado para otimizar a gestão de ativos e manutenção preditiva. Com ele, as empresas podem monitorar seus equipamentos em tempo real, prever falhas antes que ocorram e tomar decisões estratégicas baseadas em dados precisos. A plataforma oferece dashboards intuitivos, geração de relatórios detalhados e uma visão completa do desempenho dos ativos, garantindo maior eficiência operacional e redução de custos com manutenção corretiva.",
    technologies: ["Vite.js", "Express.js", "PostgreSQL", "Digital Ocean"],
    clientTestimonial:
      "O AGS transformou a forma como gerenciamos nossos ativos na indústria. Antes, lidávamos com manutenções inesperadas que geravam altos custos e atrasos na produção. Agora, com a manutenção preditiva, conseguimos antecipar problemas e agir de forma proativa. Os relatórios detalhados e o dashboard intuitivo nos dão uma visão completa do desempenho dos equipamentos, tornando nossa operação muito mais eficiente. É uma ferramenta indispensável para qualquer indústria que busca otimização e redução de custos!",
  },
  {
    id: "project-b",
    name: "Universus Store",
    customerLogo: "/universus-logo.svg",
    description: "Sistema de vendas de NFT para um game play to earn.",
    image: "/universus-store-image.png",
    longDescription:
      "O Universus Store é a plataforma oficial de marketplace do Universus, um game NFT inovador. Aqui, os jogadores podem comprar personagens exclusivos para utilizar no jogo, garantindo uma experiência personalizada e estratégica. Desenvolvido com React, Express, AWS e MongoDB, o Universus Store oferece uma experiência segura e fluida, permitindo transações rápidas e integração direta com o game. Prepare-se para explorar o universo de Universus com personagens únicos e prontos para a ação!",
    technologies: ["React", "Express.js", "MongoDB", "AWS"],
    clientTestimonial:
      "O Universus Store tornou a experiência no Universus ainda mais emocionante! A plataforma é super intuitiva e segura, permitindo que eu compre personagens rapidamente para melhorar minha jogabilidade. As transações são ágeis, e a integração direta com o game facilita muito. Sem dúvida, é a melhor forma de conseguir personagens exclusivos e evoluir dentro do jogo!",
  },
  {
    id: "project-c",
    customerLogo: "/sdec-logo.png",
    name: "SDEC App",
    description: "App offline first para venda de materiais de construção.",
    image: "/sdec-app.png",
    longDescription:
      "O APP Sdec é um aplicativo offline-first desenvolvido em React Native para a venda de materiais de construção. Ele permite que os usuários realizem pedidos e gerenciem seu estoque mesmo sem conexão com a internet, garantindo operação contínua. Quando a conexão é restabelecida, o app sincroniza automaticamente os dados com o servidor, assegurando que todas as informações estejam atualizadas e disponíveis.",
    technologies: ["Express.js", "React Native"],
    clientTestimonial: "O APP Sdec revolucionou a forma como gerenciamos nossos pedidos de materiais de construção. Antes, enfrentávamos muitos problemas com a falta de internet nos canteiros de obra, atrasando as compras e impactando os prazos. Agora, podemos registrar tudo offline e, assim que a conexão volta, os dados são sincronizados automaticamente. Isso nos deu mais agilidade e segurança no controle do estoque. Sem dúvida, uma solução indispensável para o nosso dia a dia!",
  },
]

