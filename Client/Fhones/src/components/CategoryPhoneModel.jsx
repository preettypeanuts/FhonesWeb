import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const CategoryPhoneModel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, [data]);

  const navigate = useNavigate();
  useState();
  async function SendData(id) {
    try {
      const { data } = await axios.get(`
      https://fhones-web.murafly.my.id/${id}/devices
        `);
      console.log(data, "datanya");
      setData(data);
      navigate("/device-list");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section id="brands" data-bs-spy="scroll" data-bs-target="#brands" className="">
        <div className="vh-100 tileContainer">
          <div>
            <button
              onClick={() => {
                navigate("/device-list/apple-phones-48");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nN3XsUsWYRzA8TO1cAhJkKRAo7WxSWgIwRoiosUmXRz9CySiIQI3wyBoCHRRDGpwtqXFcHAJhJaGyEEtxaWooE88eMP1gvbc+/56g77rHffh7nnunnuKIihcxDTGoq55bOjEDH447F7RjvDM7420A73ZgL5FRzvg1xX0Cy63A+2qjOtnXPvraAon8Bx3MVBEhn7cxxvs4B2eYrhyTh8m8bI8vodNPMZQM+gtHDi691jH92PO+YqpOuht/BTXjRz0PPYD0QV058CzgehK1nuNDmwFoWnsL+SO7aC4XmWhKVwJhOeK3HD1X8GXAuHVOvCZQDh9x8/VwT8E4st14HmxPUorWQ58R3xrOPsn+FS5EkW2i5M5d/0wGH6QO8692A5C09Pry4JLfCIIHs9GK/hii+iL2mgKPQ1/ko2rz0d8O+L4Bk4XzeZwlqedwqdydi7jetpBVHYSo1gq50X6XXrSElr8j/0C3uXJ8WZ0A0QAAAAASUVORK5CYII="
              />
              Apple
            </button>
            <button
              onClick={() => {
                navigate("/device-list/xiaomi-phones-80");
              }}
              className="oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3WQQrCMBBA0TmHV7LF43gAKfRSVa9k68KuvgRSKBXJjMwgaP6uNOGRhEBEan8bcACuwB17ac4FaK1oj1+dZaXeNRo4ba93Zw08BcCjBg5JrHBh7A44AvN2fCi8lPEYmNfm5arklYfD/eqeP7b/w2Axflf4bXWrvZJS34SnAPemgdPLwbtBA7cB8L4IZ7xzRE8qdIU36eXw4ZmnOYN6pbWf7AmCgC/kPy85UgAAAABJRU5ErkJggg=="
              />
              Xiaomi
            </button>
            <button
              onClick={() => {
                navigate("/device-list/samsung-phones-9");
              }}
              className="vh-50 oneTiles customBtn text-black"
            >
              <box-icon name="bolt-circle" type="solid" color="#ffffff" />
              Samsung
            </button>
            <button
              onClick={() => {
                navigate("/device-list/huawei-phones-58");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO2WTUhVYRCGz+Wm/WJi0iqT3AWRWava9GM/GNQuSjdFEBalgUW1LbJtZhDZToIgFNq16GfVKgikoKLgGm2i6McWtbDSJ0Ze6eNrjn3SJQjuCwfONzPvO3PvmZlzsqyCChIBLAQGgM/AZsffCowBVy02KzeAYX7hQeQrAA8D/3C5kzfzOzYF/p2Of3U5CzjhJBgI/Ncdf8/fJLwAtAXnPifB88D/yvFfDPxtwPnU5Dsk8Ayokq3XSTABzAMW4WMqoWlIy7A1pYBbgUi3bNtykiwDmnJ8reIeD2xDKQW8DggfgTpgDjDqJLHmXOfYS0BRXNOYxmhKAe8isX7ZjzmJtgDbHftRcfoj+5uUAkYi0jdgJbDAKW4P0B7ZLGa+OMYN8SilgMvOL7otX09k3w8c9MbPOI5OX0oBa4FJh2yjVA28DGyW/FBwfqEYi41hms0zJb4BNAZ7IMbUWAK7A5sl7wzOu6KxC9Er7UbL5RUwCnwFzkikA/gQiXQp9q7Oh4Ejur8jX1fEea8+qZK25Sh5BQwFpKfARmAJcE1LJxzLVcAP63ZNx3fZwrGbELdOWqY5jZteAR3OMxsElgIbgMfRWF7Rr+22+2jsLHa9uINOT+3zCigCT5xn90l/tTXXSb3zbcTqgQO66mUbU0y1OMaNYWNezGvEppyNh973LcByazzFz7VL953ytUTfBvGGXDHDEGYmVAucUyePRwL23C8BNQ6vRj6LCTEurbPA4uy/AHCffLwFGhxOg7OqQ9ybTQHtOSLWH2v+sEW9jxPD3tkUUABOqWm+qHNPW38kcGu1cEbELWkyCskFVFBB9g/xEy++aEwdPIH9AAAAAElFTkSuQmCC"
              />
              Huawei
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/device-list/blackberry-phones-36");
              }}
              className="oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgUlEQVR4nO2aS2wNURjHR+NRgpBoa0F0U4luRazFO/Fa0bJhw0LaioUmNk0kEkUElajYYCkeSZVSxGPVlAiCPqlHSZoWJUEpfvIl58bJ9My5Z+6de++k6S85yU3udx7/OWe++b5vxvPGGKUAM4ENwCHgKtAOfAJ+qia/29R/YrMemOHFAWASsAW4AfwmPNKnCdgsY3k5EDAZ2A28Jzp6gV1AfrZErAa6yRxdwMpMH6NjZI9zsvNRiygCHpJ9WoHCqEQUq+3OFZ2yhnRFFCg3mmu6gdmpisjP0XGyHbPwLho4SfyoS8XFxpUVYdxsB/Gly+mhqZ7YcafKZTdcwo4nwHat7VSBoL9vs8+uEjgBDKYp5J31xlcBoAv7LRHwB81ua4BdCfAjTTHlNiESxbqwzjLGZc1ugcXueZpCrnmWq+kaihdZjmaPsvkM5AXYFQLf0xQyDEw3DS5JkQs9AYubB1zS7JoD7OYD9zW7N8BNrd0FXjuuZa1pgsOOnb+qJ36iPQL6DHb9PrvHKkv0U2lYyzhgh8NaDpqENJIbFpt2TnDIe654flSU6YJc3fNaawBeGuzu+OyaDO55KMiNAuOBj0nW0m7qOOAoZImhbx5Q47ObY7CbCJzRbFoCRExwPOr9ps5S6UiGeLVpAZPLIv8ou16TjbIr1cZ7AFRrrQY4C7zCjaFUhTxNkoAluGixW+64yJSFuByt0wGLm6rugQR7LCmzhDdR0W+axCXivQ0c0FqdKrj53eoFn129iru++ew2Acu0thE47ng6hLY4uN8+y/GrdhyjwdRZotdsMnIRCkmeHMeo9fyoWmwUPAMWam2RCn/kWaKzd8QiFMARx7nWeH6koJxi/dZP/YjB/89xS7Nbanh2lAD7NDdu45cxaFSDXY9AyDaLEEmqEnxRTiLRwl7ERs8ykVTF06U0YOwpERf6ymxCJqmqeKoM6jmICl3mAquAexGKeCuRRKAQNbmU9uNOhVWEtitxKJMG0elccZT3E8STvxIBOIkI8DBx4WgoEdoRk8JxXGhJeoNbxMyKyf3SHVS5CSOmOEQanAk6pEKTlghfHao1R8epIBIRhpeh4jmywamMvntXIXYmj1p7aBeb5u5Uqap4lGFHRa6+gBBB5SrdlVpsWIZVZlqWsmuNGskNpBYrZUypAKoPaAa0j2rk9wtV0KuVpCiotDSGNwr4Bya6Qlw/T3jkAAAAAElFTkSuQmCC"
              />
              Blackberry
            </button>
            <button
              onClick={() => navigate("/device-list/google-phones-107")}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdklEQVR4nO3WvUocURTA8cEVG/UF/MA66gNoGYRNpYJF6pSGjauBNPoIeYQYUqe00rQhhb0aEpH0KYMGVPz4hcG7sF4m48ysH1vsH6aae+7/zj3nnjtJ0qPbwDhW8AU/8Tc8R9hBExP3KRzDR1y6mwt86ngBWMSJ8vzBUlVpE1eqs4W+Kl96lTHZHlYxhcHwPAu5/x5JB8pKRzO29wyv874gfRcW8Lm0NCUUUix9njzCkbmMxMsPKk3Bm4ycliuQKmA7Eq8+uDQFh5F4MslBOV7lTXQcDR6+R/H6U4k3nmqrlx+luLAWzVXPG9yIBu+jVkFai1roRW7awhUYN5BGxQumnW9FgjajoHPMlZDWQ0w7L4sEjmRU93noarU7Lolm6O3t/EJ/0VUv/OdaPMBbTGMoXItTQdie0xbXeFF0t1rylQ5/BPLPbh6Yz9j2IqQF+i7pBDc5/xCORBF2MduRNOOoNUKT+RH+Uk7xG1/xHjO3gnp0A/8AsAyy+ilo/SEAAAAASUVORK5CYII="
              />
              Pixel
            </button>
            <button
              onClick={() => navigate("/device-list/meizu-phones-74")}
              className="vh-50 oneTiles customBtn text-white"
            >
              <box-icon name="bolt-circle" type="solid" color="#ffffff" />
              Meizu
            </button>
            <button
              onClick={() => {
                navigate("/device-list/nokia-phones-1");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO2WTUhVYRCGz+Wm/WJi0iqT3AWRWava9GM/GNQuSjdFEBalgUW1LbJtZhDZToIgFNq16GfVKgikoKLgGm2i6McWtbDSJ0Ze6eNrjn3SJQjuCwfONzPvO3PvmZlzsqyCChIBLAQGgM/AZsffCowBVy02KzeAYX7hQeQrAA8D/3C5kzfzOzYF/p2Of3U5CzjhJBgI/Ncdf8/fJLwAtAXnPifB88D/yvFfDPxtwPnU5Dsk8Ayokq3XSTABzAMW4WMqoWlIy7A1pYBbgUi3bNtykiwDmnJ8reIeD2xDKQW8DggfgTpgDjDqJLHmXOfYS0BRXNOYxmhKAe8isX7ZjzmJtgDbHftRcfoj+5uUAkYi0jdgJbDAKW4P0B7ZLGa+OMYN8SilgMvOL7otX09k3w8c9MbPOI5OX0oBa4FJh2yjVA28DGyW/FBwfqEYi41hms0zJb4BNAZ7IMbUWAK7A5sl7wzOu6KxC9Er7UbL5RUwCnwFzkikA/gQiXQp9q7Oh4Ejur8jX1fEea8+qZK25Sh5BQwFpKfARmAJcE1LJxzLVcAP63ZNx3fZwrGbELdOWqY5jZteAR3OMxsElgIbgMfRWF7Rr+22+2jsLHa9uINOT+3zCigCT5xn90l/tTXXSb3zbcTqgQO66mUbU0y1OMaNYWNezGvEppyNh973LcByazzFz7VL953ytUTfBvGGXDHDEGYmVAucUyePRwL23C8BNQ6vRj6LCTEurbPA4uy/AHCffLwFGhxOg7OqQ9ybTQHtOSLWH2v+sEW9jxPD3tkUUABOqWm+qHNPW38kcGu1cEbELWkyCskFVFBB9g/xEy++aEwdPIH9AAAAAElFTkSuQmCC"
              />
              Nokia
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/device-list/nothing-phones-128");
              }}
              className="oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3WQQrCMBBA0TmHV7LF43gAKfRSVa9k68KuvgRSKBXJjMwgaP6uNOGRhEBEan8bcACuwB17ac4FaK1oj1+dZaXeNRo4ba93Zw08BcCjBg5JrHBh7A44AvN2fCi8lPEYmNfm5arklYfD/eqeP7b/w2Axflf4bXWrvZJS34SnAPemgdPLwbtBA7cB8L4IZ7xzRE8qdIU36eXw4ZmnOYN6pbWf7AmCgC/kPy85UgAAAABJRU5ErkJggg=="
              />
              Nothing Phone
            </button>
            <button
              onClick={() => {
                navigate("/device-list/oneplus-phones-95");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nN3XsUsWYRzA8TO1cAhJkKRAo7WxSWgIwRoiosUmXRz9CySiIQI3wyBoCHRRDGpwtqXFcHAJhJaGyEEtxaWooE88eMP1gvbc+/56g77rHffh7nnunnuKIihcxDTGoq55bOjEDH447F7RjvDM7420A73ZgL5FRzvg1xX0Cy63A+2qjOtnXPvraAon8Bx3MVBEhn7cxxvs4B2eYrhyTh8m8bI8vodNPMZQM+gtHDi691jH92PO+YqpOuht/BTXjRz0PPYD0QV058CzgehK1nuNDmwFoWnsL+SO7aC4XmWhKVwJhOeK3HD1X8GXAuHVOvCZQDh9x8/VwT8E4st14HmxPUorWQ58R3xrOPsn+FS5EkW2i5M5d/0wGH6QO8692A5C09Pry4JLfCIIHs9GK/hii+iL2mgKPQ1/ko2rz0d8O+L4Bk4XzeZwlqedwqdydi7jetpBVHYSo1gq50X6XXrSElr8j/0C3uXJ8WZ0A0QAAAAASUVORK5CYII="
              />
              OnePlus
            </button>
            <button
              onClick={() => {
                navigate("/device-list/oppo-phones-82");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <box-icon name="bolt-circle" type="solid" color="#ffffff" />
              Oppo
            </button>
            <button
              onClick={() => {
                navigate("/device-list/vivo-phones-98");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO2WTUhVYRCGz+Wm/WJi0iqT3AWRWava9GM/GNQuSjdFEBalgUW1LbJtZhDZToIgFNq16GfVKgikoKLgGm2i6McWtbDSJ0Ze6eNrjn3SJQjuCwfONzPvO3PvmZlzsqyCChIBLAQGgM/AZsffCowBVy02KzeAYX7hQeQrAA8D/3C5kzfzOzYF/p2Of3U5CzjhJBgI/Ncdf8/fJLwAtAXnPifB88D/yvFfDPxtwPnU5Dsk8Ayokq3XSTABzAMW4WMqoWlIy7A1pYBbgUi3bNtykiwDmnJ8reIeD2xDKQW8DggfgTpgDjDqJLHmXOfYS0BRXNOYxmhKAe8isX7ZjzmJtgDbHftRcfoj+5uUAkYi0jdgJbDAKW4P0B7ZLGa+OMYN8SilgMvOL7otX09k3w8c9MbPOI5OX0oBa4FJh2yjVA28DGyW/FBwfqEYi41hms0zJb4BNAZ7IMbUWAK7A5sl7wzOu6KxC9Er7UbL5RUwCnwFzkikA/gQiXQp9q7Oh4Ejur8jX1fEea8+qZK25Sh5BQwFpKfARmAJcE1LJxzLVcAP63ZNx3fZwrGbELdOWqY5jZteAR3OMxsElgIbgMfRWF7Rr+22+2jsLHa9uINOT+3zCigCT5xn90l/tTXXSb3zbcTqgQO66mUbU0y1OMaNYWNezGvEppyNh973LcByazzFz7VL953ytUTfBvGGXDHDEGYmVAucUyePRwL23C8BNQ6vRj6LCTEurbPA4uy/AHCffLwFGhxOg7OqQ9ybTQHtOSLWH2v+sEW9jxPD3tkUUABOqWm+qHNPW38kcGu1cEbELWkyCskFVFBB9g/xEy++aEwdPIH9AAAAAElFTkSuQmCC"
              />
              Vivo
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/device-list/realme-phones-118");
              }}
              className="oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3WQQrCMBBA0TmHV7LF43gAKfRSVa9k68KuvgRSKBXJjMwgaP6uNOGRhEBEan8bcACuwB17ac4FaK1oj1+dZaXeNRo4ba93Zw08BcCjBg5JrHBh7A44AvN2fCi8lPEYmNfm5arklYfD/eqeP7b/w2Axflf4bXWrvZJS34SnAPemgdPLwbtBA7cB8L4IZ7xzRE8qdIU36eXw4ZmnOYN6pbWf7AmCgC/kPy85UgAAAABJRU5ErkJggg=="
              />
              Realme
            </button>
            <button
              onClick={() => {
                navigate("/device-list/sony-phones-7");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nN3XsUsWYRzA8TO1cAhJkKRAo7WxSWgIwRoiosUmXRz9CySiIQI3wyBoCHRRDGpwtqXFcHAJhJaGyEEtxaWooE88eMP1gvbc+/56g77rHffh7nnunnuKIihcxDTGoq55bOjEDH447F7RjvDM7420A73ZgL5FRzvg1xX0Cy63A+2qjOtnXPvraAon8Bx3MVBEhn7cxxvs4B2eYrhyTh8m8bI8vodNPMZQM+gtHDi691jH92PO+YqpOuht/BTXjRz0PPYD0QV058CzgehK1nuNDmwFoWnsL+SO7aC4XmWhKVwJhOeK3HD1X8GXAuHVOvCZQDh9x8/VwT8E4st14HmxPUorWQ58R3xrOPsn+FS5EkW2i5M5d/0wGH6QO8692A5C09Pry4JLfCIIHs9GK/hii+iL2mgKPQ1/ko2rz0d8O+L4Bk4XzeZwlqedwqdydi7jetpBVHYSo1gq50X6XXrSElr8j/0C3uXJ8WZ0A0QAAAAASUVORK5CYII="
              />
              Sony
            </button>
            <button
              onClick={() => {
                navigate("/device-list/acer-phones-59");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <box-icon name="bolt-circle" type="solid" color="#ffffff" />
              Acer
            </button>
            <button
              onClick={() => {
                navigate("/device-list/lenovo-phones-73");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO2WTUhVYRCGz+Wm/WJi0iqT3AWRWava9GM/GNQuSjdFEBalgUW1LbJtZhDZToIgFNq16GfVKgikoKLgGm2i6McWtbDSJ0Ze6eNrjn3SJQjuCwfONzPvO3PvmZlzsqyCChIBLAQGgM/AZsffCowBVy02KzeAYX7hQeQrAA8D/3C5kzfzOzYF/p2Of3U5CzjhJBgI/Ncdf8/fJLwAtAXnPifB88D/yvFfDPxtwPnU5Dsk8Ayokq3XSTABzAMW4WMqoWlIy7A1pYBbgUi3bNtykiwDmnJ8reIeD2xDKQW8DggfgTpgDjDqJLHmXOfYS0BRXNOYxmhKAe8isX7ZjzmJtgDbHftRcfoj+5uUAkYi0jdgJbDAKW4P0B7ZLGa+OMYN8SilgMvOL7otX09k3w8c9MbPOI5OX0oBa4FJh2yjVA28DGyW/FBwfqEYi41hms0zJb4BNAZ7IMbUWAK7A5sl7wzOu6KxC9Er7UbL5RUwCnwFzkikA/gQiXQp9q7Oh4Ejur8jX1fEea8+qZK25Sh5BQwFpKfARmAJcE1LJxzLVcAP63ZNx3fZwrGbELdOWqY5jZteAR3OMxsElgIbgMfRWF7Rr+22+2jsLHa9uINOT+3zCigCT5xn90l/tTXXSb3zbcTqgQO66mUbU0y1OMaNYWNezGvEppyNh973LcByazzFz7VL953ytUTfBvGGXDHDEGYmVAucUyePRwL23C8BNQ6vRj6LCTEurbPA4uy/AHCffLwFGhxOg7OqQ9ybTQHtOSLWH2v+sEW9jxPD3tkUUABOqWm+qHNPW38kcGu1cEbELWkyCskFVFBB9g/xEy++aEwdPIH9AAAAAElFTkSuQmCC"
              />
              Lenovo
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/device-list/honor-phones-121");
              }}
              className="oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3WQQrCMBBA0TmHV7LF43gAKfRSVa9k68KuvgRSKBXJjMwgaP6uNOGRhEBEan8bcACuwB17ac4FaK1oj1+dZaXeNRo4ba93Zw08BcCjBg5JrHBh7A44AvN2fCi8lPEYmNfm5arklYfD/eqeP7b/w2Axflf4bXWrvZJS34SnAPemgdPLwbtBA7cB8L4IZ7xzRE8qdIU36eXw4ZmnOYN6pbWf7AmCgC/kPy85UgAAAABJRU5ErkJggg=="
              />
              Honor
            </button>
            <button
              onClick={() => {
                navigate("/device-list/razer-phones-117");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nN3XsUsWYRzA8TO1cAhJkKRAo7WxSWgIwRoiosUmXRz9CySiIQI3wyBoCHRRDGpwtqXFcHAJhJaGyEEtxaWooE88eMP1gvbc+/56g77rHffh7nnunnuKIihcxDTGoq55bOjEDH447F7RjvDM7420A73ZgL5FRzvg1xX0Cy63A+2qjOtnXPvraAon8Bx3MVBEhn7cxxvs4B2eYrhyTh8m8bI8vodNPMZQM+gtHDi691jH92PO+YqpOuht/BTXjRz0PPYD0QV058CzgehK1nuNDmwFoWnsL+SO7aC4XmWhKVwJhOeK3HD1X8GXAuHVOvCZQDh9x8/VwT8E4st14HmxPUorWQ58R3xrOPsn+FS5EkW2i5M5d/0wGH6QO8692A5C09Pry4JLfCIIHs9GK/hii+iL2mgKPQ1/ko2rz0d8O+L4Bk4XzeZwlqedwqdydi7jetpBVHYSo1gq50X6XXrSElr8j/0C3uXJ8WZ0A0QAAAAASUVORK5CYII="
              />
              Razer
            </button>
            <button
              onClick={() => {
                navigate("/device-list/sony_ericsson-phones-19");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <box-icon name="bolt-circle" type="solid" color="#ffffff" />
              Sony Ericsson
            </button>
            <button
              onClick={() => {
                navigate("/device-list/huawei-phones-58");
              }}
              className="vh-50 oneTiles customBtn text-white"
            >
              <img
                className="oneTilesimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO2WTUhVYRCGz+Wm/WJi0iqT3AWRWava9GM/GNQuSjdFEBalgUW1LbJtZhDZToIgFNq16GfVKgikoKLgGm2i6McWtbDSJ0Ze6eNrjn3SJQjuCwfONzPvO3PvmZlzsqyCChIBLAQGgM/AZsffCowBVy02KzeAYX7hQeQrAA8D/3C5kzfzOzYF/p2Of3U5CzjhJBgI/Ncdf8/fJLwAtAXnPifB88D/yvFfDPxtwPnU5Dsk8Ayokq3XSTABzAMW4WMqoWlIy7A1pYBbgUi3bNtykiwDmnJ8reIeD2xDKQW8DggfgTpgDjDqJLHmXOfYS0BRXNOYxmhKAe8isX7ZjzmJtgDbHftRcfoj+5uUAkYi0jdgJbDAKW4P0B7ZLGa+OMYN8SilgMvOL7otX09k3w8c9MbPOI5OX0oBa4FJh2yjVA28DGyW/FBwfqEYi41hms0zJb4BNAZ7IMbUWAK7A5sl7wzOu6KxC9Er7UbL5RUwCnwFzkikA/gQiXQp9q7Oh4Ejur8jX1fEea8+qZK25Sh5BQwFpKfARmAJcE1LJxzLVcAP63ZNx3fZwrGbELdOWqY5jZteAR3OMxsElgIbgMfRWF7Rr+22+2jsLHa9uINOT+3zCigCT5xn90l/tTXXSb3zbcTqgQO66mUbU0y1OMaNYWNezGvEppyNh973LcByazzFz7VL953ytUTfBvGGXDHDEGYmVAucUyePRwL23C8BNQ6vRj6LCTEurbPA4uy/AHCffLwFGhxOg7OqQ9ybTQHtOSLWH2v+sEW9jxPD3tkUUABOqWm+qHNPW38kcGu1cEbELWkyCskFVFBB9g/xEy++aEwdPIH9AAAAAElFTkSuQmCC"
              />
              Huawei
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
