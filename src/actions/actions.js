export const saveState = (state) => {
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem('state', serialState ); 
        
    } catch (error) {

        
    }
};

export const loadState = () => {
    try {

        const serialState = localStorage.getItem('state');
        if(serialState === 0) {
            return undefined;
        }
        
    } catch (error) {

        return undefined;
        
    }
}