import api from '@config/api';
import { app } from '@shared/infra/http/app';

const apiConfig = api();

app.listen(apiConfig.API_PORT, async () => {
  console.log(`SERVER STARTED ON http://localhost:${apiConfig.API_PORT}`);
});

/** TODO
 *   CRIAR O .ENV E COLOCAR AS INFORMAÇÕES DO BANCO NELE
 *   REFAZER MODELO CONCEITUAL
 *   ADICIONAR SERVIÇO DE GERAR CUPOM QUANDO O EMPLOYER REQUISITAR DEPOIS DE TER FEITO CONTATO COM O EMPREGADO
 *   ADICIONAR SERVIÇOS DE AVALIAÇÃO NO MÓDULO DO (USUARIO | CONTRATO) E DEPOIS FINALIZAR O CONTRATO
 *   SE SOBRAR TEMPO:
 *   - INTEGRAR O SERVIÇO DA IBM PARA O UPLOAD DE IMAGENS + O IBM FACADE
 *   - ADICIONAR A ROTA DE DELETE NORMAL
 **/
