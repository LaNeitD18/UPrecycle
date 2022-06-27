/* eslint-disable no-plusplus */
/* eslint-disable max-len */
interface TrashConcept {
  urlImg: string;
  name: string;
  description: string;
  count: number;
}

interface TrashImage {
  uri: string;
  title: string;
}

export const TrashConcepts: TrashConcept[] = [
  {
    urlImg:
      "https://i.pinimg.com/564x/05/e1/a5/05e1a5fbaf2c66dc9259b1ae19b7a3ce.jpg",
    name: "Battery",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/bc/7a/cd/bc7acdefb08c53f87391761c626e7fb7.jpg",
    name: "Biological",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/16/d9/4c/16d94cd112db3b29fa6e8d21d384c5dc.jpg",
    name: "BrownGlass",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/12/22/c1/1222c1182b574e182a20038391011732.jpg",
    name: "Cardboard",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/9f/49/91/9f49911fb48c2aff7168f17b418667cb.jpg",
    name: "Clothes",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/e1/2f/93/e12f9347330e3577c30276174991b82e.jpg",
    name: "GreenGlass",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/47/c5/16/47c516d0388abc6663f00c644bcdb142.jpg",
    name: "Metal",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/5d/70/32/5d70329e702a6e20c3dcde7bd8fac93c.jpg",
    name: "Paper",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/736x/e8/5d/a1/e85da161475979d25424954a98181042.jpg",
    name: "Plastic",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/06/2d/b0/062db00fdc354b1f793373bc7e31752e.jpg",
    name: "Shoes",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/736x/cc/60/a8/cc60a8a350d179a1712d853d99d07b1f.jpg",
    name: "Trash",
    description: "",
    count: 0
  },
  {
    urlImg:
      "https://i.pinimg.com/564x/fc/e8/67/fce867677623d59e80d1a7b58aa5aa01.jpg",
    name: "WhiteGlass",
    description: "",
    count: 0
  }
];

export const SearchIconURLConcept = (nameConcept: string) => {
  if (nameConcept === undefined) {
    return TrashConcepts[0].urlImg;
  }

  for (let i = 0; i < TrashConcepts.length; i++) {
    if (TrashConcepts[i].name === nameConcept) {
      return TrashConcepts[i].urlImg;
    }
  }

  return TrashConcepts[0].urlImg;
};

export const TrashImages: TrashImage[] = [
  {
    uri: "https://cdn-4.ohay.tv/imgs/af39c6ea22f745a08a73/728.jpg",
    title: "Thủy tinh trắng - chai nước"
  },
  {
    uri: "http://tapchimoitruong.vn/files/H%C3%A0%20N%E1%BB%99i%20nc.jpg",
    title: "Đồ nhựa - để dành bán đồ nát"
  },
  {
    uri: "https://menbephot.net/wp-content/uploads/2021/04/Che-pham-Emzeo-co-kha-nang-khu-mui-hoi-va-phan-huy-cac-loai-chat-thai-huu-co-480x320.jpg",
    title: "Hữu cơ - vỏ sau khi gọt trái cây"
  },
  {
    uri: "https://img.bestdealplus.com/ae04/kf/H59bd256330b74053ae20d93dfade085bU.jpg",
    title: "Quần áo - Áo thun cũ"
  },
  {
    uri: "https://muaphelieutoanquoc.com.vn/wp-content/uploads/2021/12/tai-che-vo-hop-kim-loai-3.jpg",
    title: "Kim loại - lon nước ngọt"
  },
  {
    uri: "https://media.moitruongvadothi.vn/2019/11/16/9855/1573912939-rjgld.jpg",
    title: "Điện tử - thùng pin"
  },
  {
    uri: "https://cokhithanhtai.com//upload/ckfinder/images/2(6).jpg",
    title: "Đồ nhựa - chai nước mắm"
  },
  {
    uri: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/b542b321e2fadaaa2e399b0b4d9340a3/b6b32ed2e65bf0744d1fdd826e47c191/aHR0cHNfX193d3cuY2xlYW5pcGVkaWEuY29tX2NvbnRlbnRfZGFtX3VuaWxldmVyX2NsZWFuaXBlZGlhX2dsb2JhbF9nZW5lcmFsX2ltYWdlX21vbnN0ZXJfcGVuX2hvbGRlcnNfc2hhbXBvb19ib3R0bGVzXzItMjIzNC5qcGc/990w-660h/t%C3%A1i-ch%E1%BA%BF-r%C3%A1c-th%E1%BA%A3i%3A-l%E1%BB%A3i-%C3%ADch-v%C3%A0-c%C3%A1ch-ph%C3%A2n-lo%E1%BA%A1i.jpg",
    title: "Giấy - bìa giấy làm hộp bút"
  },
  {
    uri: "https://johnsonluxury.com/wp-content/uploads/2019/07/Calais-Lustrous-Chrome-Ballpoint-Pen-Fountain-Pen-in-Gift-Box-5-300x300.jpg",
    title: "Rác - vỏ bút cũ"
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqEId7nUwPlCGK_PjraLmvdHdeqejE6s1fA&usqp=CAU",
    title: "Giấy - giấy hộp sữa"
  },
  {
    uri: "https://cdc.thuathienhue.gov.vn/UploadFiles/TinTuc/2019/10/17/2%20ld.jpg",
    title: "Rác - Thùng rác sau hè"
  },
  {
    uri: "https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_08_12/needless.jpg",
    title: "Y tế - ống tiêm y tế"
  },
  {
    uri: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/b542b321e2fadaaa2e399b0b4d9340a3/b6b32ed2e65bf0744d1fdd826e47c191/aHR0cHNfX193d3cuY2xlYW5pcGVkaWEuY29tX2NvbnRlbnRfZGFtX3VuaWxldmVyX2NsZWFuaXBlZGlhX2dsb2JhbF9nZW5lcmFsX2ltYWdlX21vbnN0ZXJfcGVuX2hvbGRlcnNfc2hhbXBvb19ib3R0bGVzXzItMjIzNC5qcGc/990w-660h/t%C3%A1i-ch%E1%BA%BF-r%C3%A1c-th%E1%BA%A3i%3A-l%E1%BB%A3i-%C3%ADch-v%C3%A0-c%C3%A1ch-ph%C3%A2n-lo%E1%BA%A1i.jpg",
    title: "Giấy - bìa giấy làm hộp bút"
  }
];
