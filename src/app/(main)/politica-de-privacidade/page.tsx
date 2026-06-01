import Link from "next/link";
import { colors } from "@/lib/colors";

export const metadata = {
  title: "Política de Privacidade | Odontomax",
  description: "Saiba como a Odontomax coleta, utiliza e protege seus dados pessoais.",
};

const LAST_UPDATED = "01 de junho de 2025";

export default function PrivacyPage() {
  return (
    <section style={{ backgroundColor: colors.surface }} className="flex-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="mb-10">
          <p className="text-sm mb-3" style={{ color: colors.mutedLight }}>
            Atualizado em {LAST_UPDATED}
          </p>
          <h1
            className="text-4xl font-medium leading-tight mb-4"
            style={{ color: colors.ink }}
          >
            Política de <span style={{ color: colors.brand }}>Privacidade</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: colors.muted }}>
            A Odontomax valoriza a privacidade dos seus pacientes e visitantes. Este documento
            descreve quais dados pessoais coletamos, como os utilizamos e quais são os seus
            direitos, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).
          </p>
        </div>

        <div className="flex flex-col gap-10" style={{ color: colors.muted }}>

          <Section title="1. Quem somos">
            <p>
              <strong style={{ color: colors.ink }}>Odontomax Clínica Odontológica</strong> é a
              controladora dos dados pessoais tratados por meio deste site. Para dúvidas ou
              solicitações relacionadas a esta política, entre em contato pelo e-mail{" "}
              <a
                href="mailto:contato@odontomax.com.br"
                style={{ color: colors.brand }}
              >
                contato@odontomax.com.br
              </a>
              .
            </p>
          </Section>

          <Section title="2. Dados coletados na página de agendamento">
            <p>
              Ao preencher o formulário disponível na página{" "}
              <Link href="/agendar" style={{ color: colors.brand }}>/agendar</Link>,
              coletamos os seguintes dados pessoais:
            </p>
            <ul className="flex flex-col gap-2 mt-3 pl-4 list-disc">
              <li><strong style={{ color: colors.ink }}>Nome completo:</strong> para identificação do paciente.</li>
              <li><strong style={{ color: colors.ink }}>WhatsApp / Telefone:</strong> para confirmação e contato sobre o agendamento.</li>
              <li><strong style={{ color: colors.ink }}>E-mail:</strong> para envio de confirmações e comunicações relacionadas à consulta.</li>
              <li><strong style={{ color: colors.ink }}>Observações</strong> (opcional): informações adicionais que o paciente queira compartilhar antes da consulta.</li>
              <li><strong style={{ color: colors.ink }}>Tratamento desejado:</strong> para direcionar o atendimento ao profissional adequado.</li>
              <li><strong style={{ color: colors.ink }}>Data e horário preferidos:</strong> para organização da agenda clínica.</li>
            </ul>
          </Section>

          <Section title="3. Finalidade do tratamento">
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="flex flex-col gap-2 mt-3 pl-4 list-disc">
              <li>Confirmar e gerenciar o agendamento de consultas;</li>
              <li>Entrar em contato com o paciente para confirmar, reagendar ou cancelar horários;</li>
              <li>Direcionar o atendimento ao tratamento solicitado;</li>
              <li>Cumprir obrigações legais relacionadas ao exercício da odontologia.</li>
            </ul>
            <p className="mt-3">
              Não utilizamos seus dados para fins comerciais, publicidade de terceiros ou
              qualquer outra finalidade não descrita acima sem o seu consentimento prévio.
            </p>
          </Section>

          <Section title="4. Base legal">
            <p>
              O tratamento dos dados se fundamenta no{" "}
              <strong style={{ color: colors.ink }}>consentimento do titular</strong> (art. 7º, I da
              LGPD), manifestado pelo preenchimento voluntário do formulário de agendamento, e na{" "}
              <strong style={{ color: colors.ink }}>execução de contrato</strong> (art. 7º, V),
              uma vez que os dados são necessários para a prestação do serviço de saúde solicitado.
            </p>
          </Section>

          <Section title="5. Compartilhamento de dados">
            <p>
              Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins
              comerciais. Podemos compartilhá-los apenas nas seguintes situações:
            </p>
            <ul className="flex flex-col gap-2 mt-3 pl-4 list-disc">
              <li>Com ferramentas internas de gestão de agenda utilizadas pela clínica, sob obrigação de sigilo;</li>
              <li>Quando exigido por lei, ordem judicial ou autoridade competente.</li>
            </ul>
          </Section>

          <Section title="6. Prazo de retenção">
            <p>
              Os dados pessoais coletados são mantidos pelo tempo necessário para cumprir
              a finalidade do agendamento e as obrigações legais aplicáveis à área de saúde,
              respeitando os prazos previstos pelo Conselho Federal de Odontologia (CFO) e
              pela legislação vigente. Após esse período, os dados são eliminados de forma segura.
            </p>
          </Section>

          <Section title="7. Seus direitos como titular">
            <p>Nos termos da LGPD, você tem direito a:</p>
            <ul className="flex flex-col gap-2 mt-3 pl-4 list-disc">
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar os dados que temos sobre você;</li>
              <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a eliminação dos dados, quando aplicável;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:contato@odontomax.com.br" style={{ color: colors.brand }}>
                contato@odontomax.com.br
              </a>
              .
            </p>
          </Section>

          <Section title="8. Segurança">
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados
              contra acesso não autorizado, perda, alteração ou divulgação indevida. O formulário
              de agendamento é transmitido por conexão segura (HTTPS).
            </p>
          </Section>

          <Section title="9. Alterações nesta política">
            <p>
              Esta política pode ser atualizada periodicamente. A data de revisão é sempre
              indicada no topo desta página. Recomendamos que você a consulte regularmente.
            </p>
          </Section>

        </div>

      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold" style={{ color: colors.ink }}>
        {title}
      </h2>
      <div className="text-sm leading-relaxed flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
