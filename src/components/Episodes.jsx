import React from 'react';

export function Episodes(props) {
    return (
        <span>
          { props.episodes.map((episode, index) => {
              const keyvalue = `${index}${episode}`;
              return <span key={keyvalue} style={{color: 'blue'}}> {episode} </span>
          })}
        </span>
      )
}
