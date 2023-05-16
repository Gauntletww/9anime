import React, { useState } from "react";
export default function Slide(props) {
  const side_aime = [
    {
      title: "Bleach",
      description:
        "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.\\\\n\\\\nHowever, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.\\\\n\\\\n[Written by MAL Rewrite]",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg",
    },
    {
      title: "Tonikawa: Over The Moon For You: 2nd Season",
      description:
        "In the wake of their first home burning down, Nasa and Tsukasa Yuzaki are seeking temporary shelter at the Arisugawas' bathhouse. Though they have only been married for a short time, their relationship has only become sweeter by the day. Nasa is determined to spend as much time with his wife as possible, basking in the happiness of their marriage.\\\\n\\\\nThe newlyweds find new ways to explore their relationship. From adopting a cat, going to an amusement park, and even watching an impromptu romantic comedy featuring Nasa's former teacher, every day is a new experience. But while Tsukasa continues to meet the people in Nasa's life, Nasa has yet to meet more of Tsukasa's family. Though they appear to be the picture-perfect couple to everyone around them, Nasa begins to wonder if he will ever learn more about his wife's mysterious past.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/be/85/be855285814752aa2def6fcaba6f3269/be855285814752aa2def6fcaba6f3269.jpg",
    },
    {
      title: "The Legendary Hero Is Dead!",
      description:
        "Far to the north of the world lies Hell's Gate, a portal formerly used by the Demon Lord to invade the human realm. Thanks to the legendary hero Shion Bladearts, wielder of Excalibur, and his loyal band of companions, the Gate was sealed off and the demonic threat was vanquished.  Unfortunately, the seal was incomplete and has begun to weaken, allowing the demons to once again begin their attack. Worried about the safety of his village, selfish and perverted farmer Touka Scott dig pitfalls to defend against the demons. But fear not, for Shion is on his way to reseal Hell's Gate and save humanity!  Or at least he was, because the legendary hero is dead, having fallen into one of the pitfalls Touka dug. Luckily, dealing with the dead is the specialty of necromancer Anri Haynesworth. While she can't revive him, Anri can at least salvage their quest by forcing Touka's soul into Shion's rotting body and dragging him along to Hell's Gate in Shion's place. Not wanting to be left behind, Touka's childhood friend Yuna Yunis tags along. Together, the three of them set out as what just might be the most unsuitable party to ever try to save the world!",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/57/f8/57f8283354fe92f23fc216a53e7368d0/57f8283354fe92f23fc216a53e7368d0.jpg",
    },
    {
      title: "Dr. Stone: New World",
      description:
        "With the ambitious Ryuusui Nanami on board, Senkuu Ishigami and his team are almost ready to sail the seas and reach the other side of the world—where the bizarre green light that petrified humanity originated. Thanks to the revival of a skillful chef, enough food is being prepared for the entire crew, and the incredible reinvention of the GPS promises to ensure safety on the open sea.\\\\n\\\\nPreparations for the upcoming journey progress swimmingly until Senkuu receives an eerie message from a mysterious source. More driven than ever, the scientist sets out to explore the new world and discover what it can offer for his scientific cause. Though the uncharted territories may hide unkind surprises, Senkuu, with a little help from science, is ready to take on any challenge.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/56/cc/56cca40be898cbecc462ea9987870942/56cca40be898cbecc462ea9987870942.jpg",
    },
    {
      title: "The Ancient Magus' Bride Season 2",
      description:
        "Apprentice mage Chise Hatori is invited to enroll at the College, a prestigious learning institution for sorcerers, to examine and look for a way to remove the curses she bears. Despite her groom Elias Ainsworth's reluctance, Chise accepts the proposal, as she believes attending the school might help her minimize her self-sacrificing tendencies.\\\\n\\\\nFrom the get-go, Chise grabs the attention of her classmates and professors alike, who have never seen a mage in action before. However, there is a sinister plot brewing behind the College's back, and the young mage will have to determine who is friend or foe in order to put a stop to it.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/ba/a2/baa2cf51574e886b03140a0c023dc849/baa2cf51574e886b03140a0c023dc849.jpg",
    },
    {
      title: "Loving Yamada at Lv999",
      description:
        "After her boyfriend breaks up with her for another girl, college student Akane Kinoshita wrestles with a broken heart and the memories he left behind. Loading up Forest of Savior, the MMO they used to play together, she forms a plan to get back at her ex-boyfriend through an in-person event for the game. In the process, she runs into someone unexpected: Akito Yamada, a gaming legend who just happens to be her guildmate.\\\\n\\\\nDesperate for support, Akane ropes the asocial Yamada into helping with her scheme and lending her a shoulder to cry on. The differences between Akane and Yamada soon become apparent as they spend time together, yet they cannot help but notice each other's inner qualities. As the two gain more experience with one another in and out of the game, their tentative acquaintance may level up in a way neither expects.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/b7/da/b7da3cbb4e82c692f724b73848326dca/b7da3cbb4e82c692f724b73848326dca.jpg",
    },
    {
      title: "Edens Zero 2nd Season",
      description:
        "Now in possession of the Edens Zero, Shiki Granbell has gathered the Four Shining Stars. With the help of his new friends, Shiki will be able to breach Dragonfall—the border of the Sakura Cosmos swarming with mechanical dragons. Once that is achieved, he can continue his quest to find the goddess Mother.\\\\n\\\\nBefore the Edens Zero crew can advance their journey, they notice a mysterious warship following them. Upon learning that the ship—the Belial Gore—belongs to Drakken Joe, Shiki and his crew attempt to infiltrate it, intent on figuring out why the Dark Alchemist is after them. In the process, the Edens Zero is taken hostage by Drakken's subordinates.\\\\n\\\\nThough they are in a tight situation, Shiki refuses to back down. Working together with his friends, Shiki will have to take down the Dark Alchemist if he hopes to make it out of the Belial Gore alive.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/76/9a/769aa036cdb4a575b43b44ef2ad625bf/769aa036cdb4a575b43b44ef2ad625bf.jpg",
    },
    {
      title: "Skip and Loafer",
      description:
        "In order to pursue her dream of bringing positive changes to Japan, Mitsumi Iwakura leaves her countryside town to attend a prestigious high school in the hustle and bustle of Tokyo. As she has already mapped a clear life plan, she has absolute confidence that there will be zero mishaps from then onwards.\\\\n\\\\nDespite her ambitious promise, the country girl ends up running late on the first day when she gets lost on her way to school. Fortunately, she meets a fellow first-year student, Sousuke Shima, who is in the same situation and offers to go with her. They eventually make it to school, but the misfortunes do not end there, as Mitsumi leaves an unfavorable first impression in front of her classmates.\\\\n\\\\nNevertheless, the class soon takes notice of her friendship with Sousuke despite their opposing personalities. Only time will tell whether Mitsumi will be able to forge fruitful relationships with her classmates, and she will certainly not be alone.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/69/dd/69dd49d8ad5033c8f649b67e9c3bfef9/69dd49d8ad5033c8f649b67e9c3bfef9.jpg",
    },
    {
      title:
        "I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too",
      description:
        "All his life, Yuuya Tenjou has been the subject of resentment and contempt from everyone around him, even from his parents. To make matters worse, his grandfather—the only person who ever showed him affection—suddenly dies, leaving Yuuya truly alone.\\\\n\\\\nDespite facing many adversities, Yuuya does what he can to offer kindness to those who need it—but even the most good-natured people can only tolerate so much abuse. Just when he reaches his breaking point, a flicker of hope appears in the form of a hidden door in his bathroom.\\\\n\\\\nThis door provides two-way access to an abandoned house in another world, where he instantly gains game-like stats and skills. Moreover, the house once belonged to a sage, which gives Yuuya access to remarkable weapons, equipment, and crops with extraordinary effects. With these newfound blessings, the once-undesirable Yuuya may just reach his true potential and become unstoppable.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/ff/b6/ffb6981af9cacd38b190c2d878a4405a/ffb6981af9cacd38b190c2d878a4405a.jpg",
    },
    {
      title: "Hell's Paradise",
      description:
        "Gabimaru the Hollow, a ninja of Iwagakure Village known for being cold and emotionless, was set up by his fellow ninja and is now on death row. Tired of killing and betrayal, he wants to die. However, no method of execution works on him because as much as the seemingly apathetic Gabimaru refuses to admit it, he does have a reason to live. He wants to return to his wife, who was the reason why he softened up and failed to be an effective assassin. Thus, he refuses to die.\\\\n\\\\nAsaemon the Decapitator, a famous executioner, sees this and has a proposal for the ninja. He wants Gabimaru to join an expedition to an island south of Japan in search of the elixir of life in exchange for a full pardon by the Shogunate. However, this island isn't a normal island: it's believed to be Paradise.\\\\n\\\\nHowever the island is full of mysteries, and the exploring team—consisting of those marked for death—might not be fully prepared to handle them.",
      url: "https://img.bunnycdnn.ru/_r/1366x768/100/e4/05/e4055651560b12f4f735657be1dc001f/e4055651560b12f4f735657be1dc001f.jpg",
    },
  ];

  return (
    <>
      <img
        className={`fade-in-image`}
        src={side_aime[props.slide].url}
        loading="lazy"
        key={props.slide}
      />
      <div className="anime_below">
        <p className="anime_info fade-in-title" key={props.slide}>
          <span className="anime_title ">{side_aime[props.slide].title}</span>
          <p className="anime_des">{side_aime[props.slide].description}</p>
        </p>
        <a href="https://9animetv.to/watch/skip-and-loafer-18351">Watch Now</a>
      </div>
    </>
  );
}
