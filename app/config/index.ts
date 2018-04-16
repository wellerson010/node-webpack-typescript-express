import Production from './production';
import Development from './development';
import Interface from './interface';

const Config:Interface = (process.env.DEVELOPMENT) ? Development:Production;

export default Config;