import { Injectable } from '@angular/core';
import { Equipo, Jugador } from '../models/equipo.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LigaService {
  private _equipos: Equipo[];

  public equiposActualizados = new Subject<void>();

  constructor(){
    this._equipos = [

      // 1. REAL MADRID
      new Equipo(
        'real-madrid', 'Real Madrid CF', 34, 13, 11, 1, 1, 31, 11, 20, 
        ['G', 'G', 'G', 'G', 'E'], 'assets/images/Real_Madrid_CF.png',
        [
          new Jugador(1, 'Thibaut Courtois', 'Portero', 1),
          new Jugador(2, 'Dani Carvajal', 'Defensa', 2),
          new Jugador(3, 'Éder Militão', 'Defensa', 3),
          new Jugador(4, 'David Alaba', 'Defensa', 4),
          new Jugador(5, 'Antonio Rüdiger', 'Defensa', 22),
          new Jugador(6, 'Ferland Mendy', 'Defensa', 23),
          new Jugador(7, 'Fede Valverde', 'Centrocampista', 8),
          new Jugador(8, 'Aurélien Tchouaméni', 'Centrocampista', 14),
          new Jugador(9, 'Eduardo Camavinga', 'Centrocampista', 6),
          new Jugador(10, 'Jude Bellingham', 'Centrocampista', 5),
          new Jugador(11, 'Vinicius Jr', 'Delantero', 7),
          new Jugador(12, 'Kylian Mbappé', 'Delantero', 9),
          new Jugador(13, 'Rodrygo Goes', 'Delantero', 11),
          new Jugador(14, 'Luka Modrić', 'Centrocampista', 10),
          new Jugador(15, 'Brahim Díaz', 'Delantero', 21)
        ]
      ),

      // 2. ATHLETIC CLUB (BILBAO)
      new Equipo(
        'athletic-club', 'Athletic Club', 24, 13, 7, 3, 3, 22, 14, 8, 
        ['G', 'E', 'G', 'P', 'G'], 'assets/images/Athletic_Bilbao.png',
        [
          new Jugador(1, 'Unai Simón', 'Portero', 1),
          new Jugador(2, 'Julen Agirrezabala', 'Portero', 13),
          new Jugador(3, 'Dani Vivian', 'Defensa', 3),
          new Jugador(4, 'Aitor Paredes', 'Defensa', 4),
          new Jugador(5, 'Yuri Berchiche', 'Defensa', 17),
          new Jugador(6, 'Óscar de Marcos', 'Defensa', 18),
          new Jugador(7, 'Iñigo Ruiz de Galarreta', 'Centrocampista', 16),
          new Jugador(8, 'Mikel Vesga', 'Centrocampista', 6),
          new Jugador(9, 'Oihan Sancet', 'Centrocampista', 8),
          new Jugador(10, 'Nico Williams', 'Delantero', 10),
          new Jugador(11, 'Iñaki Williams', 'Delantero', 9),
          new Jugador(12, 'Gorka Guruzeta', 'Delantero', 12),
          new Jugador(13, 'Alex Berenguer', 'Delantero', 7),
          new Jugador(14, 'Unai Gómez', 'Centrocampista', 30)
        ]
      ),

      // 3. ATLÉTICO DE MADRID
      new Equipo(
        'atletico-madrid', 'Atlético de Madrid', 29, 13, 8, 5, 0, 24, 8, 16, 
        ['G', 'E', 'G', 'G', 'E'], 'assets/images/Atletico_Madrid.png',
        [
          new Jugador(1, 'Jan Oblak', 'Portero', 13),
          new Jugador(2, 'Nahuel Molina', 'Defensa', 16),
          new Jugador(3, 'José María Giménez', 'Defensa', 2),
          new Jugador(4, 'Robin Le Normand', 'Defensa', 24),
          new Jugador(5, 'Reinildo Mandava', 'Defensa', 23),
          new Jugador(6, 'Koke', 'Centrocampista', 6),
          new Jugador(7, 'Rodrigo De Paul', 'Centrocampista', 5),
          new Jugador(8, 'Conor Gallagher', 'Centrocampista', 4),
          new Jugador(9, 'Antoine Griezmann', 'Delantero', 7),
          new Jugador(10, 'Julián Álvarez', 'Delantero', 19),
          new Jugador(11, 'Alexander Sørloth', 'Delantero', 9),
          new Jugador(12, 'Marcos Llorente', 'Centrocampista', 14),
          new Jugador(13, 'Samuel Lino', 'Centrocampista', 12),
          new Jugador(14, 'Ángel Correa', 'Delantero', 10)
        ]
      ),

      // 4. FC BARCELONA
      new Equipo(
        'fc-barcelona', 'FC Barcelona', 33, 13, 11, 0, 2, 37, 12, 25, 
        ['P', 'G', 'G', 'G', 'G'], 'assets/images/FC_Barcelona.png',
        [
          new Jugador(1, 'Marc-André ter Stegen', 'Portero', 1),
          new Jugador(2, 'Iñaki Peña', 'Portero', 13),
          new Jugador(3, 'Jules Koundé', 'Defensa', 23),
          new Jugador(4, 'Pau Cubarsí', 'Defensa', 2),
          new Jugador(5, 'Iñigo Martínez', 'Defensa', 5),
          new Jugador(6, 'Alejandro Balde', 'Defensa', 3),
          new Jugador(7, 'Marc Casadó', 'Centrocampista', 17),
          new Jugador(8, 'Pedri', 'Centrocampista', 8),
          new Jugador(9, 'Dani Olmo', 'Centrocampista', 20),
          new Jugador(10, 'Lamine Yamal', 'Delantero', 19),
          new Jugador(11, 'Raphinha', 'Delantero', 11),
          new Jugador(12, 'Robert Lewandowski', 'Delantero', 9),
          new Jugador(13, 'Gavi', 'Centrocampista', 6),
          new Jugador(14, 'Frenkie de Jong', 'Centrocampista', 21),
          new Jugador(15, 'Ferran Torres', 'Delantero', 7)
        ]
      ),

      // 5. GETAFE CF
      new Equipo(
        'getafe-cf', 'Getafe CF', 14, 13, 2, 8, 3, 10, 11, -1, 
        ['E', 'E', 'P', 'G', 'E'], 'assets/images/Getafe_CF.png',
        [
          new Jugador(1, 'David Soria', 'Portero', 13),
          new Jugador(2, 'Djené Dakonam', 'Defensa', 2),
          new Jugador(3, 'Omar Alderete', 'Defensa', 15),
          new Jugador(4, 'Diego Rico', 'Defensa', 16),
          new Jugador(5, 'Juan Iglesias', 'Defensa', 21),
          new Jugador(6, 'Mauro Arambarri', 'Centrocampista', 18),
          new Jugador(7, 'Luis Milla', 'Centrocampista', 5),
          new Jugador(8, 'Carles Aleñá', 'Centrocampista', 11),
          new Jugador(9, 'Borja Mayoral', 'Delantero', 9),
          new Jugador(10, 'Bertuğ Yıldırım', 'Delantero', 19),
          new Jugador(11, 'Christantus Uche', 'Centrocampista', 6),
          new Jugador(12, 'Carles Pérez', 'Delantero', 17)
        ]
      ),

      // 6. GIRONA FC
      new Equipo(
        'girona-fc', 'Girona FC', 20, 13, 6, 2, 5, 20, 18, 2, 
        ['G', 'P', 'G', 'P', 'E'], 'assets/images/Girona_FC.png',
        [
          new Jugador(1, 'Paulo Gazzaniga', 'Portero', 13),
          new Jugador(2, 'Arnau Martínez', 'Defensa', 4),
          new Jugador(3, 'David López', 'Defensa', 5),
          new Jugador(4, 'Daley Blind', 'Defensa', 17),
          new Jugador(5, 'Miguel Gutiérrez', 'Defensa', 3),
          new Jugador(6, 'Oriol Romeu', 'Centrocampista', 14),
          new Jugador(7, 'Yangel Herrera', 'Centrocampista', 21),
          new Jugador(8, 'Iván Martín', 'Centrocampista', 23),
          new Jugador(9, 'Viktor Tsygankov', 'Delantero', 8),
          new Jugador(10, 'Bryan Gil', 'Delantero', 20),
          new Jugador(11, 'Abel Ruiz', 'Delantero', 9),
          new Jugador(12, 'Yáser Asprilla', 'Delantero', 10),
          new Jugador(13, 'Cristhian Stuani', 'Delantero', 7)
        ]
      ),

      // 7. RCD ESPANYOL
      new Equipo(
        'rcd-espanyol', 'RCD Espanyol', 12, 13, 3, 3, 7, 14, 22, -8, 
        ['P', 'P', 'G', 'E', 'P'], 'assets/images/RCD_Espanyol.png',
        [
          new Jugador(1, 'Joan García', 'Portero', 1),
          new Jugador(2, 'Omar El Hilali', 'Defensa', 23),
          new Jugador(3, 'Marash Kumbulla', 'Defensa', 4),
          new Jugador(4, 'Leandro Cabrera', 'Defensa', 6),
          new Jugador(5, 'Brian Oliván', 'Defensa', 14),
          new Jugador(6, 'Alex Král', 'Centrocampista', 20),
          new Jugador(7, 'Pol Lozano', 'Centrocampista', 10),
          new Jugador(8, 'Álvaro Tejero', 'Defensa', 12),
          new Jugador(9, 'Javi Puado', 'Delantero', 7),
          new Jugador(10, 'Alejo Véliz', 'Delantero', 9),
          new Jugador(11, 'Jofre Carreras', 'Delantero', 17),
          new Jugador(12, 'Fernando Calero', 'Defensa', 5)
        ]
      ),

      // 8. REAL BETIS
      new Equipo(
        'real-betis', 'Real Betis', 21, 13, 5, 6, 2, 17, 13, 4, 
        ['E', 'G', 'E', 'G', 'P'], 'assets/images/Real_Betis_Balompie.png',
        [
          new Jugador(1, 'Rui Silva', 'Portero', 1),
          new Jugador(2, 'Héctor Bellerín', 'Defensa', 2),
          new Jugador(3, 'Diego Llorente', 'Defensa', 3),
          new Jugador(4, 'Natan', 'Defensa', 6),
          new Jugador(5, 'Romain Perraud', 'Defensa', 12),
          new Jugador(6, 'Marc Roca', 'Centrocampista', 21),
          new Jugador(7, 'Johnny Cardoso', 'Centrocampista', 4),
          new Jugador(8, 'Pablo Fornals', 'Centrocampista', 18),
          new Jugador(9, 'Giovani Lo Celso', 'Centrocampista', 20),
          new Jugador(10, 'Isco Alarcón', 'Centrocampista', 22),
          new Jugador(11, 'Vitor Roque', 'Delantero', 8),
          new Jugador(12, 'Chimy Ávila', 'Delantero', 9),
          new Jugador(13, 'Abde Ezzalzouli', 'Delantero', 10)
        ]
      ),

      // 9. REAL SOCIEDAD
      new Equipo(
        'real-sociedad', 'Real Sociedad', 18, 13, 5, 3, 5, 12, 11, 1, 
        ['G', 'P', 'E', 'G', 'P'], 'assets/images/Real_Sociedad.png',
        [
          new Jugador(1, 'Álex Remiro', 'Portero', 1),
          new Jugador(2, 'Jon Aramburu', 'Defensa', 27),
          new Jugador(3, 'Igor Zubeldia', 'Defensa', 5),
          new Jugador(4, 'Nayef Aguerd', 'Defensa', 21),
          new Jugador(5, 'Javi López', 'Defensa', 12),
          new Jugador(6, 'Martín Zubimendi', 'Centrocampista', 4),
          new Jugador(7, 'Luka Sučić', 'Centrocampista', 24),
          new Jugador(8, 'Brais Méndez', 'Centrocampista', 23),
          new Jugador(9, 'Takefusa Kubo', 'Delantero', 14),
          new Jugador(10, 'Mikel Oyarzabal', 'Delantero', 10),
          new Jugador(11, 'Sheraldo Becker', 'Delantero', 11),
          new Jugador(12, 'Sergio Gómez', 'Centrocampista', 17),
          new Jugador(13, 'Umar Sadiq', 'Delantero', 19)
        ]
      ),

      // 10. VILLARREAL CF
      new Equipo(
        'villarreal-cf', 'Villarreal CF', 25, 13, 7, 4, 2, 23, 19, 4, 
        ['G', 'E', 'G', 'P', 'G'], 'assets/images/Villarreal_CF.png',
        [
          new Jugador(1, 'Diego Conde', 'Portero', 13),
          new Jugador(2, 'Kiko Femenía', 'Defensa', 17),
          new Jugador(3, 'Raúl Albiol', 'Defensa', 3),
          new Jugador(4, 'Logan Costa', 'Defensa', 4),
          new Jugador(5, 'Sergi Cardona', 'Defensa', 12),
          new Jugador(6, 'Dani Parejo', 'Centrocampista', 10),
          new Jugador(7, 'Santi Comesaña', 'Centrocampista', 14),
          new Jugador(8, 'Alex Baena', 'Centrocampista', 16),
          new Jugador(9, 'Yeremy Pino', 'Delantero', 21),
          new Jugador(10, 'Ayoze Pérez', 'Delantero', 22),
          new Jugador(11, 'Gerard Moreno', 'Delantero', 7),
          new Jugador(12, 'Ilias Akhomach', 'Delantero', 11),
          new Jugador(13, 'Thierno Barry', 'Delantero', 15)
        ]
      )
    ];
  }

  getEquipos(): Equipo[]{
    return this._equipos.sort((a,b) => {
      if(b.puntos !== a.puntos) return b.puntos - a.puntos; //Ordenamos por puntos
      return b.diferenciaGoles - a.diferenciaGoles; //Si coinciden ordenamos por diferencia de goles
    })
  }

  getEquipoPorId(id: string): Equipo | undefined{
    return this._equipos.find(e => e.id === id);
  }

  registrarPartido(idLocal: string, idVisitante: string, golesLocal: number, golesVisitante: number){
    const local = this.getEquipoPorId(idLocal);
    const visitante = this.getEquipoPorId(idVisitante);

    if(local && visitante){
      local.actualizarEstadistica(golesLocal, golesVisitante);
      visitante.actualizarEstadistica(golesVisitante, golesLocal);

      this.equiposActualizados.next();
    }
  }

}
