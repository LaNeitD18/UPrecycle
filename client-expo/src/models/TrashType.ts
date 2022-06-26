export interface TrashType {
  id: number;
  type: "Recyclable" | "Organic" | "Others";
  label: string;
  moreInfo?: string;
  description?: string;
  materials: string[];
}

export const mockTrashTypes: TrashType[] = [
  {
    id: 1,
    type: "Recyclable",
    label: "Rác tái chế",
    moreInfo: "Được xử lý ở các nhà máy tái chế rác thải",
    description:
      "Là các loại rác khó phân hủy nhưng có thể đưa vào sản xuất, tái chế thành các sản phẩm có thể sử dụng được nhằm mục đích con người. Rác tái chế thường là các chất vô cơ như: giấy thải, các loại vỏ hộp chai, lọ, vỏ lon thực phẩm, kim loại",
    materials: [
      "Thùng carton",
      "Sách báo cũ",
      "Hộp giấy",
      "Bì thư",
      "Bao thuốc lá",
      "Chai nhựa",
      "Các loại vải, quần áo cũ",
      "..."
    ]
  },
  {
    id: 2,
    type: "Organic",
    label: "Rác hữu cơ",
    moreInfo:
      "Được xử lý ở các nhà máy sản xuất phân hữu cơ, nhà máy sản xuất thức ăn gia súc",
    description:
      "Là loại rác dễ dàng phân hủy, có khả năng đưa vào sử dụng cùng với các loại chế phẩm vi sinh để sản xuất phân bón hoặc có thể làm thức ăn cho động vật. Nguồn gốc: là từ các phần bỏ đi của thực phẩm sau khi lấy đi phần sử dụng để chế biến thức ăn cho con người, hoặc thực phẩm thừa, hư hỏng không thế sử dụng, các loại lá cây, hoa, cỏ.",
    materials: [
      "Các loại rau, củ, quả",
      "Các loại trái cây",
      "Bã trà",
      "Bã cà phê",
      "Giấy ăn",
      "..."
    ]
  },
  {
    id: 3,
    type: "Others",
    label: "Rác vô cơ",
    moreInfo: "Được xử lý ở các cơ sở xử lý rác (đốt, chôn lấp,...)",
    description:
      "Là các loại rác không thể sử dụng được nữa và cũng không thể tái chế mà chỉ còn phương pháp xử lý đó là đốt hoặc chôn lấp. Nguồn gốc rác vô cơ là các loại vật liệu xây dựng không thể sử dụng được, các loại bao bì, vỏ hộp không thể tái chế, các loại túi ni lông thường được bỏ đi sau quá trình sử dụng như: đựng hộp sữa, thực phẩm, những vật dụng, thiết bị trong nhà.",
    materials: [
      "Nhãn chai, túi ni-lông các loại",
      "Đồ gốm, đồ sứ",
      "Thủy tinh",
      "Vỏ sò, vỏ trứng",
      "Đồ da, đồ cao su",
      "Băng video, đĩa CD",
      "..."
    ]
  }
];
