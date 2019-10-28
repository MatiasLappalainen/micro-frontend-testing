import React, { useEffect } from 'react';

const FrontPage = ({isTrue}) => {

    useEffect(() => {
        const el = document.getElementById('testframe')
        el.addEventListener('load', () => {
            el.contentWindow.postMessage(JSON.stringify({isTrue}), 'http://localhost:3002')
        })
    })

   return <iframe title="testframe" id="testframe" src="http://localhost:3002" align="middle" width="100%" height="100%" frameBorder="0"/>
}

export default FrontPage