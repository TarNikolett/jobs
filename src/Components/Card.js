export default function Card(props){
  const myData = props.data;
  const index = props.index;

  function handleOnclick(date){
    alert(`Feladás dátuma:${date}`);
  };

  const card = myData.map(
    (job) => 
      <div className={(index+1) % 3 === 0 ? "card card-3" :"card"} key={index}>
        <h2>{job.title}</h2>
        <h3>{job.companyName}</h3>
          <p className="technology-title">Technologies:</p>
            {job.technologies.map((technology) =>
            <p className="technology-list">
              {technology}
            </p>)}
          <p>Type: {job.type}</p>
          <p>{job.country} , {job.city}</p>
        <div className="button-container">
          <button className="button" onClick={()=> {handleOnclick(job.createdAt)}}>Feladás dátuma</button>
        </div>
      </div>
  );

  return card
};