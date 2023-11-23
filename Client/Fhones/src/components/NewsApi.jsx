import { useEffect, useState } from "react";
import axios from 'axios';

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://news67.p.rapidapi.com/v2/topic-search',
        params: {
          languages: 'id',
          search: 'iphone 15 promax'
        },
        headers: {
          'X-RapidAPI-Key': 'bf373f7194msh1a63fd2fd6276f1p170f25jsn0785f8fbafe5',
          'X-RapidAPI-Host': 'news67.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        setNewsData(response.data.articles || []); // Mengatur data berita ke state
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []); // Dipanggil saat komponen dipasang pertama kali

  return (
    <div>
      <h2>Berita Mengenai iPhone 15 Pro Max</h2>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
