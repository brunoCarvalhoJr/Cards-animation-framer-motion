import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Wrapper, Box, Grid, Overlay 
} from './Cards.style'

const Cards = () => {
  const [id, setId] = useState(undefined);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} 
          layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? ( 
          <Overlay
            onClick={() => setId(undefined)} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <Box 
              layoutId={id} 
              style={{ width: 300, height: 200 }}
            />
          </Overlay>
        ) : undefined}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Cards;