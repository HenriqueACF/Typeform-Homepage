import { motion } from 'framer-motion';
import style from 'styled-components';

export const Container = style(motion.header)`
  width:100%;
  height:200px;
  background:rgba(0,0,0,0.1);

  position:fixed;
  top:0;
  z-index:999;
`