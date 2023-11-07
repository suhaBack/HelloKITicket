import axios from "axios";
import "./newTicket.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from 'antd';
import { API_URL } from "../../config/contansts";

function NewTicket() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl ] = useState(null);


  const AddContents = async (e) => {
    e.preventDefault();

    const imageURL = imageUrl; // C:\fakepath\스크린샷 2023-06-04 031733.png
    const title = e.target.contentTitle.value; // asd
    const kind = e.target.contnetKind.value; // 2
    const date = e.target.contentDate.value;
    const address = e.target.contentAddress.value;
    const price = e.target.contentPrice.value;
    const help = e.target.contentHelp.value;
    const people = e.target.contentMax.value;
    //db 순서 = 제목 종류 가격 설명 사진 위치 일정 최대인원
    // console.log(imageURL,title,find,date,address,price,help,people);

    console.log("test", imageURL);

    await axios
      .post(`${API_URL}/newTicket`, {
        title,
        kind,
        price,
        help,
        imageURL,
        address,
        date,
        people,
      })
      .then(() => {
        console.log("성공");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const onChangeImage = (info) => {
    // 파일이 업로드 중일 때
    console.log('new',info.file)
    if(info.file.status === "uploading"){
        console.log('업로드중');
        return;
    }
    // 파일이 업로드 완료 되었을 때
    if(info.file.status === "done") {
        console.log('성공');
        const response = info.file.response;
        const imageUrl = response.imageUrl;
        // 받은 이미지경로를 imageUrl에 넣어줌
        setImageUrl(imageUrl);
    }
}


  return (
    <div className="newTicketPage container">
      <div className="mainTitle">티켓등록</div>
      <form onSubmit={AddContents}>
        <div className="newTicketinfo">
          <label>프로그램 명</label>
          <input type="text" name="newImage" id="contentTitle"></input>
        </div>
        <div className="newTicketinfo">
          <label>분류</label>
          <select id="contnetKind">
            <option value={1}>콘서트</option>
            <option value={2}>뮤지컬</option>
            <option value={3}>클래식</option>
            <option value={4}>전시회</option>
          </select>
        </div>
        <div className="newTicketinfo">
          <label>상영 일정</label>
          <input type="date" name="newImage" id="contentDate"></input>
        </div>
        <div className="newTicketinfo">
          <label>위치</label>
          <input type="text" name="newImage" id="contentAddress"></input>
        </div>
        <div className="newTicketinfo">
          <label>가격</label>
          <input type="number" name="newImage" id="contentPrice"></input>
        </div>
        <div className="newTicketinfo">
          <label>프로그램 설명</label>
          <input type="text" name="newImage" id="contentHelp"></input>
        </div>
        <div className="newTicketinfo">
          <label>최대 이용가능 인원</label>
          <input type="number" name="newImage" id="contentMax"></input>
        </div>
        <div className="newTicketinfo">
            <Upload name="image" action={`${API_URL}/image`}
                listType="picture" showUploadList={false} onChange={onChangeImage}>
                { imageUrl ? <img src={imageUrl} 
                alt="" width= "200px" height= "200px" /> : 
                        (<div id="upload-img-placeholder">
                        <span>이미지를 등록 해주세요.</span>
                </div>)}    
            </Upload>
        </div>
        <div className="newticketEditBtn">
          <button type="submit">등록하기</button>
        </div>
      </form>
    </div>

    // <div>
    //   <Form name="productUpload" onFinish={onSubmit}>
    //     <Form.Item name="imgUpload"
    //         label={<div className='upload-label'>상품사진</div>}>
            
    //     </Form.Item>
    //     <Divider/>
    //     <Form.Item name="seller" 
    //         label={<div className='upload-label'>판매자명</div>}>
    //         <Input className="nameUpload" size='large'
    //         placeholder='판매자 이름을 입력하세요'/>
    //     </Form.Item>
    //     <Divider/>
    //     <Form.Item name="name"
    //     label={<div className='upload-label'>상품이름</div>}>
    //         <Input
    //             className='upload-name'
    //             size='large'
    //             placeholder='상품 이름을 입력해주세요'/>
    //     </Form.Item>
    //     <Divider/>
    //     <Form.Item name="price"
    //     label={<div className='upload-label'>상품가격</div>}>
    //         <InputNumber defaultValue={0} size="large"/>
    //     </Form.Item>
    //     <Divider/>
    //     <Form.Item name="description"
    //     label={<div className='upload-label'>상품소개</div>}>
    //     <Input.TextArea
    //         size='large'
    //         id = "product-description"
    //         maxLength={300}
    //         placeholder="상품 소개를 적어주세요"
    //     />
    //     </Form.Item>
    //     <Form.Item>
    //         <Button id="submit-button" size="large" htmlType='submit'>
    //             상품등록하기
    //         </Button>
    //     </Form.Item>
    //   </Form>
    // </div>
  );
}

export default NewTicket;
