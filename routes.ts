import { RouteDef } from './routing';


import { Home } from './01-home/home';
import { Chips } from './02-chips/chips';
import { GrayPicker } from './03-gray/gray-picker';
import { Search } from './04-search/search';
import { Counters } from './05-counter/counters';
import { Timers } from './06-timer/timers';
import { Grid } from './07-grid/grid';
import { Ale } from './08-Alemann/ale';
import { Del } from './09-del/del';
import { Lipo } from './10-Lipovetsky/lipo';
import { Rom } from './11-Romero/rom';
import { Hall } from './12-StuartHall/hall';
import { Vir } from './13-Virno/vir';
import { Rep } from './14-rep/rep';
import { Tab } from './15-tab/tab';
import { Bad } from './16-bad/bad';
import { Noe } from './17-noe/noe';
import { Lei } from './09-del/lei';
import { Cyc } from './18-cyc/cyc';
import { Elm } from './19-elm/elm';
import { Snab } from './20-snab/snab';
import { Grun } from './21-grun/grun';
import { D3 } from './22-mount/mounts';
import { Hol } from './23-hol/hol';
import { Jam } from './24-jam/jam';
import { Man } from './25-man/man';
import { Der } from './26-der/der';
import { Koy } from './27-koy/koy';

export const routesDefs: RouteDef[] =
  [
   
   { urlPath: '/', label: 'Home', cssClass: 'home', componentFn: Home },
    { urlPath: '/mounts', label: 'Cycle and D3', cssClass: 'mounts', componentFn: D3 },
    { urlPath: '/chips', label: 'Raymond Williams', cssClass: 'chips', componentFn: Chips },
    { urlPath: '/hall', label: 'Stuart Hall', cssClass: 'hall', componentFn: Hall },
    { urlPath: '/gray', label: 'Gray', cssClass: 'gray', componentFn: GrayPicker },
    { urlPath: '/search', label: 'Search', cssClass: 'search', componentFn: Search },
    { urlPath: '/counters', label: 'Counters', cssClass: 'counters', componentFn: Counters },
    { urlPath: '/timers', label: 'Timers', cssClass: 'timers', componentFn: Timers },
    { urlPath: '/grid', label: 'Grid', cssClass: 'grid', componentFn: Grid },
    { urlPath: '/tab', label: 'Verbs Athina', cssClass: 'tab', componentFn: Tab },
    { urlPath: '/ale', label: 'Alemann', cssClass: 'ale', componentFn: Ale },
    { urlPath: '/bad', label: 'Pierre Bourdieu', cssClass: 'bad', componentFn: Bad },
    { urlPath: '/del', label: 'Deleuze', cssClass: 'del', componentFn: Del },
    { urlPath: '/lipo', label: 'Lipovetsky', cssClass: 'lipo', componentFn: Lipo },
    { urlPath: '/rom', label: 'Romero', cssClass: 'rom', componentFn: Rom },
    { urlPath: '/vir', label: 'Paolo Virno', cssClass: 'vir', componentFn: Vir },
    { urlPath: '/rep', label: 'Diferencia', cssClass: 'rep', componentFn: Rep },
{ urlPath: '/noe', label: 'Elisabeth Noelle-Neumann', cssClass: 'noe', componentFn: Noe },
{ urlPath: '/del', label: 'Vincenn', cssClass: 'lei', componentFn: Lei },
{ urlPath: '/cyc', label: 'Cycle', cssClass: 'cyc', componentFn: Cyc },
{ urlPath: '/elm', label: 'Elm', cssClass: 'elm', componentFn: Elm },
{ urlPath: '/snab', label: 'Snab', cssClass: 'snab', componentFn: Snab },
{ urlPath: '/grun', label: 'Grun', cssClass: 'grun', componentFn: Grun },
{ urlPath: '/hol', label: 'Holderling', cssClass: 'hol', componentFn: Hol },
{ urlPath: '/jam', label: 'Jameson', cssClass: 'jam', componentFn: Jam },
{ urlPath: '/man', label: 'Mandel', cssClass: 'man', componentFn: Man },
{ urlPath: '/der', label: 'Derrida', cssClass: 'der', componentFn: Der },
{ urlPath: '/koy', label: 'Koyré', cssClass: 'koy', componentFn: Koy },
  ];
