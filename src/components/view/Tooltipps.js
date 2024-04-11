
export default function Tooltipps( { position, content, loading } ) {

     return (
          <div className="tooltip-container" style={{top: position.y, left: position.x }}>
               { !loading ? (
                    <h5>{content}</h5>
               ) : (
                    <div className="skeleton" style={{width: '60px', height: '20px'}}></div>
               ) } 
          </div>
     )
}