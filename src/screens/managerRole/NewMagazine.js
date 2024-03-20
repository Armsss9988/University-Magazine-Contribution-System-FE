import React, { useState } from 'react';
import '../css/styles.css';
import Footer from '../../components/Footer';
import HeaderManger from '../../components/HeaderManger';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';


const NewMagazine = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gửi dữ liệu bài viết lên server
    console.log('Đã đăng bài viết:', { title, content });
  };
  const options = [
    { value: 'business', label: 'Business' },
    { value: 'graphic design', label: 'Graphic design'},
    { value: 'it', label: 'IT' },
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
          <HeaderManger/>
      <h2>New Magazine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
      <h2>Majors</h2>
      <Select options={options} />
    </div>
        <div>
      <h2>DeadLine</h2>
      <div>
        <label>First Day</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div>
        <label>Final Day</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </div>
        
        <button type="submit">Submit</button>
      </form>
      <div className="line"></div>
      <Footer/>
    </div>
  );
};
export default NewMagazine;