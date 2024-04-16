
const SearchImg = (props) => {
  let icon = ""
  switch(props.icon){
    case "Rain":
      icon = "fa-solid fa-umbrella";
      break;
    case "Thunderstorm":
      icon = "fa-solid fa-cloud-bolt";
      break;
    case "Drizzle":
      icon = "fa-solid fa-cloud-rain";
      break;
    case "Snow":
      icon = "fa-solid fa-snowflake";
      break;
    case "Mist":
      icon = "fa-solid fa-smog";
      break;
    case "Smoke":
      icon = "fa-solid fa-smog";
      break;
    case "Haze":
      icon = "fa-solid fa-smog";
      break;
    case "Fog":
      icon = "fa-solid fa-smog";
      break;
    case "Sand":
      icon = "fa-solid fa-smog";
      break;
    case "Dust":
      icon = "fa-solid fa-smog";
      break;
    case "Ash":
      icon = "fa-solid fa-smog";
      break;
    case "Squall":
      icon = "fa-solid fa-smog";
      break;
    case "Tornado":
      icon = "fa-solid fa-tornado";
      break;
    case "Clear":
      icon = "fa-solid fa-sun";
      break;
    case "Clouds":
      icon = "fa-solid fa-cloud";
      break;
    default:
      icon = "";
      break;
  }
  return(
      <div>
        <i id="icon" className={icon}></i>  
      </div>
  );
}

export default SearchImg;