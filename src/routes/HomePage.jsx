import React from "react";
import Hero from "../components/Hero";
import styled from "styled-components";
import Ready from "../components/Ready";
import News from "../components/News";
import Introduce from "../components/Introduce";
import Feature from "../components/Feature";
import More from "../components/More";
import Sundry from "../components/Sundry";

export default function HomePage() {
  return (
    <div className=" h-screen w-screen relative">
      <Hero />
      <Ready />
      <News />
      <Introduce
        props={{
          title: "扩展自己的岛屿并收集资源",
          desc: "您的冒险开始于一个简朴的4x4岛屿。随着你升级并掌握土地，看着你的领域不断扩大。参与农业和耕作，以维持和增强您的岛屿。建造、制作和创造你的理想天堂，反映你的成就和旅程。",
          video: "/video/box.mp4",
          img: "/images/box.png",
          bgColor: "4,120,87",
          mode: "right",
        }}
      />
      <Introduce
        props={{
          title: "探索无限的群岛",
          desc: "扬帆起航，驾驶自己的船只，探索充满快乐的海盗和隐藏秘密的岛屿。享受一个热带卡通风格的世界，每一个海岸都充满了欢笑和冒险。",
          video: "/video/box2.mp4",
          img: "/images/box2.png",
          bgColor: "6,78,59",
          mode: "left",
        }}
      />
      <Introduce
        props={{
          title: "完成任务，征服敌人，并自定义你的角色",
          desc: "穿越怪物和强大Boss的海洋，每一个都比上一个更具挑战性。升级以获得角色点数，让你可以自定义和增强你的能力。踏上寻找传奇骷髅的任务，为自己开辟通向传奇的道路。",
          video: "/video/box3.mp4",
          img: "/images/box3.png",
          bgColor: "2,44,34",
          mode: "right",
        }}
      />
      <Introduce
        props={{
          title: "制作、掌握并装备1000+物品",
          desc: "进入一个拥有无数物品和职业的世界，如钓鱼、锻造和烹饪。从你的冒险中制作、交易和掌握独特的物品，增强你的统计数据如智慧或防御。此外，装备腰带、戒指、护身符、背包和宠物，以进一步自定义Minecraft的基本物品。",
          video: "/video/box4.mp4",
          img: "/images/box4.png",
          bgColor: "113,63,18",
          mode: "left",
          occupation:
            "所有职业: 矿工, 伐木工, 铁匠, 收割者, 炼金术士, 工匠, 猎人, 厨师, 渔夫, 珠宝匠, 裁缝, 鞋匠",
          occupationBg: "133,77,14",
        }}
      />
      <Introduce
        props={{
          title: "航行海盗船",
          desc: "探索各种大小和品牌的海盗船。在船上设置车间，将你的宝藏储存在货舱中，并派遣你的船只进行探险，寻找隐藏的宝藏。船越快，传送延迟越短。创建和自定义你的舰队，以最大化你在群岛的冒险。",
          video: "/video/box5.mp4",
          img: "/images/box5.png",
          bgColor: "66,32,6",
          mode: "right",
          button: "探索海盗船",
        }}
      />
      <Feature />
      <More />
      <Sundry />
    </div>
  );
}
