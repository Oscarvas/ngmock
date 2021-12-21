export interface PF {
  // [x: string]: any;
  texto: string,
  info?: string, // tooltip
  funcion?: string, // opcional por ahora
  bloqueado: boolean, // indica si se debe habilitar el chip
  color?: string
}

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
  ANNO: string;
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

export interface MAPA_PHNMSIP1{
  ANNO_CONTABLE?: string,
  ANNO?: string,
  DIA_CONTABLE?: string,
  DOC_CONT_ANNO?: number,
  DOC_CONT_DC?: string,
  DOC_CONT_NUM?: string,
  FECHA_EMISION?: number,
  FECHA_SITU?: number,
  LIQUIDO_EURO?: number,
  LIT_NUEVA_SITU?: string,
  LIT_SITU?: string,
  MES_CONTABLE?: string,
  NUEVA_SITU?: string,
  RECIBO?: string,
  SITU?: string,
  TIPO_PAGO?: string

}

export interface Cabecera{
  entidad: string,
  usuario: string
}
