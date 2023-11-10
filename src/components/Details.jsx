import React from 'react'
import { motion } from "framer-motion"
import SectionWrapper from "../hoc/SectionWrapper"
import { textVariant } from '../utils/motion'


const Details = () => {
  return (
    <motion.div className=" py-32 text-[30px] flex flex-col gap-6 w-full lg:px-32 md:px-16 px-8 ">
      <motion.p variants={textVariant()} className=" text-black " >
      Il y a longtemps, dans un coin reculé d'Internet appelé "Le Royaume de la Folie", vivait un groupe de créatures 
      étranges et farfelues. Parmi eux se trouvait le légendaire Professeur Absurdo, un savant fou dont l'imagination 
      débordait de bizarreries et d'idées délirantes. Il portait toujours un chapeau en forme de cornet de glace, avait 
      des lunettes en forme de spirales et un laboratoire rempli de gadgets bizarres. 

      Un jour, le Professeur Absurdo eut une révélation. Il décida de créer un site web qui serait le refuge ultime de l'absurdité,
      un endroit où les visiteurs pourraient échapper à la réalité et plonger dans un monde de non-sens total. Il nomma ce site 
      "FolieLandia" et le lança avec un éclat de rire tonitruant. 

      Sur FolieLandia, les visiteurs pouvaient explorer des articles scientifiques sur des sujets absurdes tels que 
      "Comment dresser des pingouins pour le ballet" ou "Les aventures secrètes des girafes cosmonautes". Le site présentait 
      également une section de recettes de cuisine pour des plats farfelus tels que "la soupe de chaussettes au chocolat" et des 
      tutoriels vidéo sur "Comment faire du trampoline avec des nuages". 

      Pour divertir davantage les visiteurs, le Professeur Absurdo avait créé une radio en ligne qui diffusait en boucle des
      chansons telles que "La Danse du Tofu Géant" et "Le Tango des Escargots Volants". Il avait même engagé un groupe de clowns 
      virtuels pour animer des chatrooms en ligne, où les gens pouvaient discuter de leurs délires les plus fous. 

      Mais ce qui rendait FolieLandia vraiment spécial, c'était la section "Histoires de la Confusion", où les visiteurs pouvaient 
      soumettre leurs propres récits loufoques et déconcertants. Des histoires sur des escargots zombies en quête de crème solaire 
      et des pingouins qui s'entraînaient pour devenir pilotes d'avions en papier. 

      Le site devint rapidement viral, attirant des millions de visiteurs du monde entier qui se perdaient avec joie dans le monde 
      absurde du Professeur Absurdo. FolieLandia était devenu un lieu de rencontre pour tous ceux qui voulaient laisser libre cours 
      à leur imagination et rire sans retenue. 

      Et voilà comment une idée farfelue du Professeur Absurdo avait donné naissance à un site troll encore plus fou, où le rire 
      était roi et la normalité était bannie. Le Royaume de la Folie était devenu un endroit où chacun pouvait être aussi délirant 
      qu'il le souhaitait, et où l'absurdité était célébrée à chaque clic. 
      </motion.p>
    </motion.div>
  )
}

export default SectionWrapper(Details, "")