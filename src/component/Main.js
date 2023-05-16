import React, { useState, useEffect } from "react";
import Progress from "./Progress";
import Slide from "./Slide";

function Main() {
  const animeItems = [
    {
      id: "18272",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 6/16",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/28/fe/28fe7068bf220d2abd0176fcc550011d/28fe7068bf220d2abd0176fcc550011d.png",
      title: "Aiyou's Secret Room",
    },
    {
      id: "18142",
      quality: "SD",
      subtitle: "SUB",
      episode: "Ep 245/526",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/ea/29/ea29478b5f4562aaa7462549fe9cd0a7/ea29478b5f4562aaa7462549fe9cd0a7.jpg",
      title: "Perman (1983)",
    },
    {
      id: "18367",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 5/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/15/6d/156d675b246379abe808817bee3a2f5b/156d675b246379abe808817bee3a2f5b.jpg",
      title: "The Marginal Service",
    },
    {
      id: "18368",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 6/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/de/17/de17a6cac30ab202cd1a388de5ebfafa/de17a6cac30ab202cd1a388de5ebfafa.jpg",
      title: "Tokyo Mew Mew New 2nd Season",
    },
    {
      id: "18351",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 6/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/f1/21/f121f498b3be50b194236f055c97c6df/f121f498b3be50b194236f055c97c6df.jpg",
      title: "Skip and Loafer",
    },
    {
      id: "18402",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 207/240",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/a1/ab/a1abaa7f5d440c98591010827e2fe60b/a1abaa7f5d440c98591010827e2fe60b.jpg",
      title: "Supreme God Emperor Season 2",
    },
    {
      id: "18266",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 10/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/aa/c8/aac8106ff0d4a84f7b44e8f78582aa38/aac8106ff0d4a84f7b44e8f78582aa38.png",
      title: "Painting Rivers and Lakes 6",
    },
    {
      id: "18370",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 6/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/ef/58/ef589599341efbee4e87edd81f6648ae/ef589599341efbee4e87edd81f6648ae.jpg",
      title: "Kizuna no Allele",
    },
    {
      id: "18343",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 6/13",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/0a/d5/0ad5356f28ee75bccfde8b69ea6a5e54/0ad5356f28ee75bccfde8b69ea6a5e54.jpg",
      title:
        "I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too",
    },
    {
      id: "18239",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 18/24",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/17/3e/173e4c5db060f057506138057261b259/173e4c5db060f057506138057261b259.jpg",
      title: "Vinland Saga: 2nd Season",
    },
    {
      id: "18344",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 5/13",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/20/2a/202a4c434af567174dc7683de096a96c/202a4c434af567174dc7683de096a96c.jpg",
      title: "Insomniacs After School",
    },
    {
      id: "18342",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 6/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/ba/cb/bacb7124d070a26097c77601250a205e/bacb7124d070a26097c77601250a205e.jpg",
      title: "In Another World With My Smartphone 2",
    },
    {
      id: "18352",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 5/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/3a/06/3a06250cf428b5e830f2fee15b96f1a4/3a06250cf428b5e830f2fee15b96f1a4.jpg",
      title: "Dead Mount Death Play",
    },
    {
      id: "17374",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 6/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/0d/22/0d223280706d8f5d2f556c7951c5bf4b/0d223280706d8f5d2f556c7951c5bf4b.jpg",
      title: "Kuma Kuma Kuma Bear Punch!",
    },
    {
      id: "18350",
      quality: "HD",
      subtitle: "SUB",
      episode: "Ep 5/12",
      image:
        "https://img.bunnycdnn.ru/_r/300x400/100/bf/3c/bf3c1f30c2a3dd8ed26cd54c11992cd3/bf3c1f30c2a3dd8ed26cd54c11992cd3.jpg",
      title: "The Reason Why Raeliana Ended up at the Duke's Mansion",
    },
  ];
  const [progress, setProgress] = useState(0);
  const progress_back = () => {
    if (progress === 0) return setProgress(9);
    setProgress((progress) => progress - 1);
  };
  const progress_forward = () => {
    if (progress === 9) return setProgress(0);
    setProgress((progress) => progress + 1);
  };
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = progress > i ? progress : i;
      if (i === 10) {
        i = 0;
        setProgress(0);
      } else {
        setProgress(i);
        i++;
      }
    }, 1800);
    return () => {
      clearInterval(interval);
    };
  }, [progress]);
  return (
    <div className="main_bar">
      <div className="main_anime">
        <div className="swipe swipe-left" onClick={progress_back}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="swipe swipe-right" onClick={progress_forward}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <Progress progress_bar={progress} />
        <Slide slide={progress} />
      </div>
      <div className="recently">
        <h1>Recently Updated</h1>
        <div className="recently_animes">
          {animeItems.map((item) => {
            return (
              <div className="anime_item" key={crypto.randomUUID()}>
                <div className="anime_item_img">
                  <img src={item.image} alt="" />
                  <span className="item_quality">{item.quality}</span>
                  <span className="item_episodes">{item.episode}</span>
                  <span className="item_audio">{item.subtitle}</span>
                </div>
                <div className="anime_item_name">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
