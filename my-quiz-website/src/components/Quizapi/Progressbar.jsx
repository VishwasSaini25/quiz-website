import React from "react";
function ProgressBar(props){
    const { bgcolor, completed } = props;
    const containerStyles = {
      height: 10,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginTop: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      animation:'lr 1s ease-in-out',
    }
    
    return <>
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
        <style>{`
            @keyframes lr {
                from { width: 0%; }
                 to { width: ${completed}% ; }
            }
        `}</style>
      </div>
    </>
}
  export default ProgressBar;