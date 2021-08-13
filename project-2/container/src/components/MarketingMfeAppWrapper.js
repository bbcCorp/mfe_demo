import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount }  from 'marketingMfe/MarketingRoot';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    
    useEffect(()=>{
        const { onParentNavigate } = mount(ref.current, {

            initialPath: history.location.pathname,

            // Callback function on the Container app that child apps will use to communicate navigation
            // Child app needs to implement onNavigate function
            onNavigate: (location) => {
                console.log(`Container app noticed navigation`);

                const { pathname } = history.location;
                if(location && location.pathname && pathname !== location.pathname){
                    console.log(location.pathname);
                    history.push(location.pathname);
                }
                
            }
        });

        history.listen(onParentNavigate);

    }, []);

    return <div ref={ref} />
};