import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { LetterCard } from "./LetterCard";

const letters = [
  {
    author: "Patricia",
    content: `En cette journée si spéciale, j'avais envie de te rappeler à quel point je t'ai toujours appréciée et combien j'aimais notre petit trio que l'on avait formé. Depuis que je t'ai rencontrée en première avec les autres, il y a toujours eu entre nous de la complicité, de l'entente et tellement de fous rires.

Même si le temps n'a pas toujours été long entre nous, il a été sincère et précieux. J'aurais aimé réapprendre à passer du temps avec toi, renouer à 100% notre amitié…

Les sourires qu'on a partagés, les petites conversations… tout. Tu es une amie que j'aime énormément, tout comme j'aime Mahmoudath.

J'espère que cette nouvelle année pour toi sera remplie de bonheur, de réussite et de tout ce que ton cœur désire ❤️`
  },
  {
    author: "Érica",
    content: `Alors ma Théthé — comme j'aime t'appeler juste pour t'énerver un peu, ahah — aujourd'hui, on a enfin fait le fameux magazine photo que tu voulais tant.

Je suis tellement fière de la personne que tu deviens chaque jour : une femme aimante, attentionnée, patiente — surtout avec moi. Je n'aurais jamais pensé qu'un jour notre amitié atteindrait un tel niveau. Tu es devenue comme un membre de ma famille, une sœur, en quelque sorte.

Merci pour tes conseils. Merci pour ta bienveillance. Merci pour ton amour. Merci pour tout, vraiment.

Et surtout, ne change jamais. Même si je ne le montre pas toujours, je tiens à toi — vraiment. On tient tous à toi.

Je remercie le bon Dieu de t'avoir mise sur mon chemin. Ce n'était pas une simple coïncidence si notre amitié a évolué comme ça : centrée sur un amour véritable entre sœurs et sur cette envie folle d'évoluer spirituellement.

Je t'aime mon bébé, Besos.`
  },
  {
    author: "Blanche Benita",
    content: `Coucou MP, moi je suis très émotive mais pas très long discours. Alors on se connaît cela fait déjà plusieurs années et on a eu beaucoup d'histoires mdrrrr. On a été proche, on s'est éloigné mais malgré tout ça on est toujours amies.

T'es une personne incroyable, toujours le sourire aux lèvres, et une amie formidable remplie de générosité et de compassion.

Tous les mots ne suffiront pas pour t'exprimer notre amour mais qu'à cela ne tienne je te souhaite un très bon anniversaire ma belle.`
  },
  {
    author: "Une amie à distance",
    content: `Joyeux anniversaire, même si aujourd'hui des kilomètres nous séparent.

La vie nous a placées dans deux pays différents, avec des journées et des réalités qui ne se ressemblent plus. Et pourtant, jamais, mais vraiment jamais, je n'ai senti notre lien s'affaiblir.

Tu restes cette personne rare qu'on rencontre une seule fois dans la vie, celle dont la présence continue d'exister, même à distance. Tu es toujours dans mon cœur, dans mes pensées, et rien n'a changé dans l'amour sincère que j'ai pour toi.

Et puis il y a ce moment de ma vie… le plus difficile, celui où j'ai perdu papa. Même loin, tu étais là. Tu prenais de mes nouvelles h24, tu te rassurais même que je mange. Ce qui m'a le plus touchée, ce sont tes prières et ton temps que tu disposais pour prier avec moi.

Merci pour ton amour, ta présence, ta force, ta douceur. Merci d'être restée, même loin. Merci d'être toi.

Je t'aimerai toujours, peu importe les kilomètres.`
  },
  {
    author: "Un ami",
    content: `Hey salut Theresa, je suis censé écrire une lettre que tu liras le jour de ton anniversaire dans laquelle je fais ton éloge.

Déjà, le fait que l'on soit devenu aussi proches m'étonne toujours vu comment avant on se calculait à peine. Mais bon, faut croire que c'était le plan de Dieu.

Franchement, ta vie est ma série préférée. Entre tes flirts permanents, tes disparitions mystérieuses et la façon dont tu termines tes relations avant même que je comprenne qu'elles avaient commencé… je ne m'ennuie jamais.

Je repense à nos bêtises et nos idées folles. Malgré la distance, malgré mes crushs sur deux de tes potes, malgré nos vies amoureuses catastrophiques et notre indécision légendaire, tu me manques énormément et je t'aime.

Tu es drôle, imprévisible, brillante. Bref, tu es tout ce qui rend cette amitié absolument unique et indispensable dans ma vie.

Joyeux anniversaire, Theresa ! Que ta journée soit aussi folle, irrésistible et imprévisible que toi.`
  },
  {
    author: "Mahmoudath",
    content: `Joyeux anniversaire Thérésa, t'es une amie formidable. T'as toujours été là quand on avait besoin de toi, et jamais personne ne pourra dire le contraire.

Quand je suis arrivée en France, j'étais triste, la maison me manquait, et tu as été la première à venir me voir malgré tout ce que tu avais à faire.

Je te remercie d'être là, avec ton sourire, ta bonne humeur et ta bonne compagnie. Tu pourras toujours compter sur moi.

On vient de loin, et désormais, chaque fois que je te verrai, je demanderai une photo avec toi — parce que c'est fou à quel point on se voit souvent, mais qu'on n'a presque aucune photo ensemble, ça doit changer.

Si tu lis ce message, c'est que nous avons enfin réussi à atteindre ce moment dont tu parlais depuis si longtemps. Ce fameux magazine qui te ferait ressentir de vraies émotions… nous y sommes enfin arrivés.

Love u ❤️`
  },
  {
    author: "Ya Luce",
    content: `Ma précieuse et douce Thérésa,

Joyeux anniversaire à toi que j'aime énormément !!! Aka la petite sœur la plus jolie et drôle, Aka notre influenceuse préférée.

Comment te décrire, toi le diamant de nos vies. Tu es si joyeuse, si pleine de compassion et de gentillesse. Tu n'hésites jamais à rendre service ni à tendre la main à ton prochain limite en t'oubliant.

Que ces 21 ans soient glorieux et aient un goût encore plus excellent que tes 20 ans. Je te souhaite une pluie de bénédictions, de nouveaux défis et beaucoup de succès dans tous les domaines de ta vie.

Je rends grâce à Dieu pour ces 1 an de plus dans ma vie. Sois richement arrosée de son amour et de sa gloire. Bisouuuus`
  },
  {
    author: "Heaven",
    content: `Thérésa, on s'est rencontrés il y a 4 ans, devenus amis il y a 3 ans et malgré les hauts et les mbas (bon c'est vrai qu'ils ont duré longtemps les mbas) je peux dire que tu es vraiment la meilleure amie que j'ai eue et que j'aurais pu avoir, même si tu me demandes à chaque fois de mettre des oignons dans tes omelettes.

En tout cas je nous souhaite le meilleur et je te souhaite le meilleur et plein de bonnes choses.
Joyeux anniversaire !!!!!`
  },
  {
    author: "Curtis",
    content: `Joyeux anniversaire Theresa ❤️

Je te souhaite tout le bonheur du monde en ce jour spécial. Je veux aussi te dire à quel point je t'aime et à quel point tu comptes pour moi. Tu es vraiment une personne importante dans ma vie : ta présence, ton énergie et ton cœur font une vraie différence autour de toi.

Merci d'être toujours là, merci pour ton soutien, ta bonne humeur et tout ce que tu représentes pour moi. J'espère que cette nouvelle année t'apportera la réussite, la paix, et tout ce que ton cœur désire.

Profite de ta journée, tu le mérites vraiment.
Je t'aime fort ❤️✨`
  },
  {
    author: "Ya Tina",
    content: `Coucouuu ma star,

It's me…, and it's your birthdayyyyyyyyyyy !!!! 21th, this is it giiiiirl !!!!

You already know how much I love you and how much you mean to me. Je ne peux citer toutes les raisons pour lesquelles tu es importante dans ma vie mais si je ne devais en donner qu'une, c'est que l'on s'est choisies comme amies devant le Seigneur. On a choisi de s'aimer au delà de notre simple relation de sœurs.

Quand tu lieras cette lettre à la toi dans 5 ans, je prophétise que tu es bilingue yassss !!!! Je prophétise une grâce excellente et débordante comme il ne s'est jamais fait sur ta vie au nom tout-puissant de Jésus-Christ !!!

J'aime ton cœur, ta générosité, tes câlins, ta douceur, notre complicité, nos looooongues discussions, tes conseils, ta compassion et je ne parle même pas de ta beauté uhhhh.

Te voir rire et croquer la vie à pleines dents est ce qui me rend heureuse pour toi, soooo do whatever makes you happy as long as it aligns with God's will.

Love you, pour toujours dans mon cœur,
Xoxo`
  },
  {
    author: "Joy",
    content: `Ma cousine préférée,

Je te remercie pour tous tes conseils. Je ne te remercierai jamais assez pour tous les moments passés avec toi, qui nous rapprochent de plus en plus : on a rigolé, on a pleuré, on s'est moquées, on s'est confiées, et tout cela nous a encore plus unies.

Nous nous sommes fait des promesses qui, par la grâce de Dieu, se réaliseront, et je ne remercierai jamais assez Dieu de t'avoir comptée parmi les personnes à qui je peux me confier.

Je te souhaite tout le bonheur du monde.
Joyeux anniversaire, ma vie d'amour.`
  }
];

export const LettersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-body mb-4 block">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            Mots d'amour de ceux qui t'aiment
          </h2>
          <p className="text-editorial max-w-2xl mx-auto">
            Chaque lettre ici est un fragment d'amour, écrit avec le cœur par ceux dont tu as touché la vie.
          </p>
          <div className="divider-elegant" />
        </motion.div>

        {/* Letters grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {letters.map((letter, index) => (
            <LetterCard
              key={letter.author}
              author={letter.author}
              content={letter.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
