import { pieChartComponent } from './piechart/piechart.component';
import { app } from '../app';
import { heroesComponent } from './heroes/heroes.component';

app.component('heroes', new heroesComponent());
app.component('piechart', new pieChartComponent());
