import { Injectable } from '@angular/core';
import { MAPA_PHNMSIPA } from '../material/pdas';

const datos: MAPA_PHNMSIPA[] = [
  {'SEL':'','ANO':'2021','ENTIDAD':'101','RECIBO':'2023025525','SIT':'I','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2021','ENTIDAD':'101','RECIBO':'1022025499','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2021','ENTIDAD':'101','RECIBO':'6021025527','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2020','ENTIDAD':'101','RECIBO':'6032025562','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2020','ENTIDAD':'101','RECIBO':'8231025504','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'PAGA EXTRA'},
  {'SEL':'','ANO':'2020','ENTIDAD':'101','RECIBO':'2031025507','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2020','ENTIDAD':'101','RECIBO':'9030025455','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2020','ENTIDAD':'101','RECIBO':'5029025489','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2020','ENTIDAD':'101','RECIBO':'9028025508','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'},
  {'SEL':'','ANO':'2020','ENTIDAD':'101','RECIBO':'7027025464','SIT':'P','MOD_PAGO':'2','ENT_PAGO':2095,'SUC_PAGO':3132,'FECHA_DESDE':20210301,'FECHA_HASTA':20210331,'TIP_PAGO':'NOMINA NORMAL'}
];

@Injectable({
  providedIn: 'root'
})
export class SimulaBackendService {

  constructor() { }

  getListadoSIPA (): MAPA_PHNMSIPA[]{
    return datos;
  }
}
