export default function Dump({ className }) {
  return (
    <div className={`green dump ${className} center-top`}>
      <div className='card-space'>
        <h2>Dump {className}</h2>
      </div>
    </div>
  );
}
