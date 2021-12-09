export interface MAPA_PHNMAILA {
  DESIPF: string;
  DUPIF: string;
  NUMIPF: string;
  TIPOIPF: string;
  AEXP: string;
  CEXP: string;
  DEEXP: string;
  DUEXP: string;
  NEXP: string;
  PEXP: string;
  TEXP: string;
}

export interface PBPACAB1{
  LINEA_1?: string;
  LINEA_2?: string;
  LINEA_3?: string;
  LINEA_4?: string;
  LINEA_5?: string;
  LINEA_8?: string;
}

export interface MAPA_PHNMSIPA {
  ANO: string;
  ENT_PAGO: number;
  ENTIDAD: string;
  FECHA_DESDE: number;
  FECHA_HASTA: number;
  MOD_PAGO: string;
  PAGINA?: string;
  PAGINA_TOT?: number;
  RECIBO: string;
  SEL: string;
  SIT: string;
  SUC_PAGO: number;
  TIP_PAGO: string;
}
