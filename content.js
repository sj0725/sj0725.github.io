// 논문, 스킬, 앨범, 챔피언은 이 파일에서 수정합니다. 따옴표와 쉼표를 유지해 주세요.
// image / cover에는 이미지 파일 경로를 입력합니다.
window.SITE_CONTENT = {
  "ownerName": "Seongjoon Cho",
  "publications": [
    {
      "key": "FALCON",
      "year": 2026,
      "venue": "ICCAD 2026",
      "image": "falcon.png",
      "imageAlt": "",
      "category": "Conference",
      "title": "FALCON: A CORDIC-based FlashAttention Accelerator for On-Device Long-Context LLM Inference",
      "authors": "Junyoung Park, Seongjoon Cho, Seungkyu Choi",
      "full": "45th IEEE/ACM International Conference on Computer-Aided Design",
      "note": "Acceptance Ratio=24.1%",
      "links": [
        [
          "Paper",
          "https://iccad.com/2026/full-program"
        ]
      ]
    },
    {
      "key": "MeltKV",
      "year": 2026,
      "venue": "ICCAD 2026",
      "image": "meltkv.png",
      "imageAlt": "",
      "category": "Conference",
      "title": "MeltKV: Memory-Aligned KV Cache Compression via Variable-Bit Packed Vector Quantization for Long-Context LLMs",
      "authors": "Jiyun Han, Seongjoon Cho, Seungkyu Choi",
      "full": "45th IEEE/ACM International Conference on Computer-Aided Design",
      "note": "Acceptance Ratio=24.1%",
      "links": [
        [
          "Paper",
          "https://iccad.com/2026/full-program"
        ]
      ]
    },
    {
      "key": "LOHA",
      "year": 2026,
      "venue": "DAC 2026",
      "image": "loha.png",
      "imageAlt": "",
      "category": "Conference",
      "title": "LOHA: A Latency-Optimized CPU-Storage Hybrid Architecture for Billion-Scale Graph-based Vector Similarity Search",
      "authors": "Seongjoon Cho, Junyoung Park, Donghyun Kang, Moohyeon Nam, Hongchan Roh, Se-Hyun Yang, Moo-Kyoung Chung, Seungkyu Choi",
      "full": "63rd ACM/IEEE Design Automation Conference",
      "note": "Acceptance Ratio=22.3%",
      "links": [
        [
          "Paper",
          "https://dl.acm.org/doi/10.1145/3770743.3804187"
        ],
        [
          "Slides",
          "https://sj0725.github.io/1560FINAL.pdf"
        ],
        [
          "Poster",
          "DAC26_Poster.pdf"
        ]
      ]
    },
    {
      "key": "BAGS",
      "year": 2026,
      "venue": "JSA 2026",
      "image": "bags.png",
      "imageAlt": "",
      "category": "Journal",
      "title": "BAGS: A Bit-Partitioned Quantization-Aware Architecture for Accelerating Graph-based Approximate Nearest Neighbor Search",
      "authors": "Seongjoon Cho, Junyoung Park, Minje Park, Seungkyu Choi",
      "full": "Journal of Systems Architecture",
      "note": "SCIE · Q1",
      "links": [
        [
          "Paper",
          "https://doi.org/10.1016/j.sysarc.2026.103897"
        ]
      ]
    },
    {
      "key": "Q-VESA",
      "year": 2026,
      "venue": "IEEE TC 2026",
      "image": "q-vesa.png",
      "imageAlt": "",
      "category": "Journal",
      "title": "Q-VESA: Accelerating Quantization-Aware Vector Search for Fast Retrieval in Prompt Engineering",
      "authors": "Seongjoon Cho, Junyoung Park, Donghyun Kang, Moohyeon Nam, Hongchan Roh, Moo-Kyoung Chung, Se-Hyun Yang, Seungkyu Choi",
      "full": "IEEE Transactions on Computers",
      "note": "SCIE · Major",
      "links": [
        [
          "Paper",
          "https://ieeexplore.ieee.org/document/11303310"
        ]
      ]
    }
  ],
  "skills": [
    {
      "name": "Programming Languages",
      "items": [
        "C/C++",
        "Python",
        "Verilog/SystemVerilog"
      ]
    },
    {
      "name": "Vector Search Libraries",
      "items": [
        { "name": "hnswlib", "url": "https://github.com/nmslib/hnswlib" },
        { "name": "DiskANN", "url": "https://github.com/microsoft/DiskANN" },
        { "name": "FAISS", "url": "https://github.com/facebookresearch/faiss" },
        { "name": "GGNN", "url": "https://github.com/cgtuebingen/ggnn" },
        { "name": "BANG", "url": "https://github.com/karthik86248/BANG-Billion-Scale-ANN" }
      ]
    },
    {
      "name": "Performance Profiling",
      "items": [
        "Intel VTune",
        "Linux Perf"
      ]
    },
    {
      "name": "Memory Simulation",
      "items": [
        { "name": "Ramulator", "url": "https://github.com/CMU-SAFARI/ramulator2" },
        { "name": "DRAMPower", "url": "https://github.com/tukl-msd/DRAMPower" },
        { "name": "MQSim", "url": "https://github.com/CMU-SAFARI/MQSim" },
        { "name": "fio", "url": "https://github.com/axboe/fio" }
      ]
    },
    {
      "name": "FPGA & Synopsys EDA Tools",
      "wide": true,
      "items": [
        "AMD Alveo U55C",
        "VCS",
        "Verdi",
        "Design Compiler",
        "PrimeTime",
        "PrimePower"
      ]
    }
  ],
  "albums": [
    {
      "title": "Toystory3",
      "artist": "Leellamarz & TOIL",
      "year": "",
      "cover": "albums/toystory3.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Toystory2",
      "artist": "Leellamarz & TOIL",
      "year": "",
      "cover": "albums/toystory2.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Life is Once",
      "artist": "Leellamarz",
      "year": "",
      "cover": "albums/Life is Once.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "VIOLINIST2",
      "artist": "Leellamarz",
      "year": "",
      "cover": "albums/VIOLINIST2.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Toast",
      "artist": "TOIL & Gist",
      "year": "",
      "cover": "albums/Toast.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "TOTO",
      "artist": "TOIL",
      "year": "",
      "cover": "albums/TOTO.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "L&B",
      "artist": "Leellamarz & Young B",
      "year": "",
      "cover": "albums/l&b.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "NOWITZKI",
      "artist": "Beenzino",
      "year": "",
      "cover": "albums/NOWITZKI.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "24:26",
      "artist": "Beenzino",
      "year": "",
      "cover": "albums/24-26.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Lifes Like",
      "artist": "Jazzyfact",
      "year": "",
      "cover": "albums/Lifes Like.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "돈 벌 시간 2",
      "artist": "CHANGMO",
      "year": "",
      "cover": "albums/돈 벌 시간 2.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "UNDERGROUND ROCKSTAR",
      "artist": "CHANGMO",
      "year": "",
      "cover": "albums/UNDERGROUND ROCKSTAR.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "ISLAND",
      "artist": "ASH ISLAND",
      "year": "",
      "cover": "albums/ISLAND.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "ROSE",
      "artist": "ASH ISLAND",
      "year": "",
      "cover": "albums/ROSE.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Ghetto Kids",
      "artist": "Homies",
      "year": "",
      "cover": "albums/Ghetto Kids.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "살아숨셔 4",
      "artist": "YUMDDA",
      "year": "",
      "cover": "albums/살아숨셔 4.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "ANTIDOTE",
      "artist": "DIMO REX",
      "year": "",
      "cover": "albums/ANTIDOTE.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Glow Forever",
      "artist": "The Quiett",
      "year": "",
      "cover": "albums/Glow Forever.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "11:11",
      "artist": "Illionaire Records",
      "year": "",
      "cover": "albums/11-11.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "오보에",
      "artist": "양홍원",
      "year": "",
      "cover": "albums/오보에.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Stranger",
      "artist": "양홍원",
      "year": "",
      "cover": "albums/Stranger.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "낭만",
      "artist": "BIG Naughty",
      "year": "",
      "cover": "albums/낭만.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "WEAK",
      "artist": "LOCO",
      "year": "",
      "cover": "albums/Weak.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Red Light",
      "artist": "Zion.T",
      "year": "",
      "cover": "albums/Red Light.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "OO",
      "artist": "Zion.T",
      "year": "",
      "cover": "albums/OO.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "wonderlust",
      "artist": "Crush",
      "year": "",
      "cover": "albums/wonderlust.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "K-FLIP",
      "artist": "Sik-K & Lil Moshipit",
      "year": "",
      "cover": "albums/K-FLIP.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "기린",
      "artist": "뱃사공",
      "year": "",
      "cover": "albums/기린.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Bad Nights",
      "artist": "ZENE THE ZILLA",
      "year": "",
      "cover": "albums/Bad Nights.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "CHED&L",
      "artist": "Way Ched & TRADE L",
      "year": "",
      "cover": "albums/CHED&L.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Primary And The Messengers",
      "artist": "프라이머리",
      "year": "",
      "cover": "albums/Primary And The Messengers.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "도모",
      "artist": "희대의, 블랙넛 & 씨잼",
      "year": "",
      "cover": "albums/도모.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "DAFT LOVE",
      "artist": "Boycold",
      "year": "",
      "cover": "albums/DAFT LOVE.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "DON′T DIE COLORS",
      "artist": "THAMA",
      "year": "",
      "cover": "albums/DON′T DIE COLORS.jpg",
      "url": "",
      "description": ""
    },
    {
      "title": "Alive",
      "artist": "BIGBANG",
      "year": "",
      "cover": "albums/Alive.jpg",
      "url": "",
      "description": ""
    }
  ],
  // Game: 챔피언 선택창 정사각형 초상화. 이 순서대로 표시됩니다.
  "champions": [
    {
      "name": "Lee Sin",
      "skin": "",
      "image": "champions/lee-sin.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/LeeSin.png"
    },
    {
      "name": "Kayn",
      "skin": "",
      "image": "champions/kayn.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Kayn.png"
    },
    {
      "name": "Nocturne",
      "skin": "",
      "image": "champions/nocturne.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Nocturne.png"
    },
    {
      "name": "Jarvan IV",
      "skin": "",
      "image": "champions/jarvan-iv.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/JarvanIV.png"
    },
    {
      "name": "Bel'Veth",
      "skin": "",
      "image": "champions/belveth.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Belveth.png"
    },
    {
      "name": "Xin Zhao",
      "skin": "",
      "image": "champions/xin-zhao.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/XinZhao.png"
    },
    {
      "name": "Sejuani",
      "skin": "",
      "image": "champions/sejuani.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Sejuani.png"
    },
    {
      "name": "Master Yi",
      "skin": "",
      "image": "champions/master-yi.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/MasterYi.png"
    },
    {
      "name": "Elise",
      "skin": "",
      "image": "champions/elise.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Elise.png"
    },
    {
      "name": "Graves",
      "skin": "",
      "image": "champions/graves.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Graves.png"
    },
    {
      "name": "Diana",
      "skin": "",
      "image": "champions/diana.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Diana.png"
    },
    {
      "name": "Lillia",
      "skin": "",
      "image": "champions/lillia.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Lillia.png"
    },
    {
      "name": "Maokai",
      "skin": "",
      "image": "champions/maokai.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Maokai.png"
    },
    {
      "name": "Kha'Zix",
      "skin": "",
      "image": "champions/khazix.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Khazix.png"
    },
    {
      "name": "Kindred",
      "skin": "",
      "image": "champions/kindred.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Kindred.png"
    },
    {
      "name": "Poppy",
      "skin": "",
      "image": "champions/poppy.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Poppy.png"
    },
    {
      "name": "Dr. Mundo",
      "skin": "",
      "image": "champions/dr-mundo.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/DrMundo.png"
    },
    {
      "name": "Shyvana",
      "skin": "",
      "image": "champions/shyvana.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Shyvana.png"
    },
    {
      "name": "Evelynn",
      "skin": "",
      "image": "champions/evelynn.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Evelynn.png"
    },
    {
      "name": "Pantheon",
      "skin": "",
      "image": "champions/pantheon.png",
      "position": "50% 50%",
      "source": "https://ddragon.leagueoflegends.com/cdn/16.20.1/img/champion/Pantheon.png"
    }
  ]
};
