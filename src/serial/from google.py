from google.cloud import storage
import serial
import requests

# Configurações da porta serial
porta_serial = 'COM3'  # Substitua pela porta serial específica
velocidade_serial = 9600  # Substitua pela velocidade de baud desejada

# Configurações do serviço de nuvem (Google Cloud Storage)
#bucket_nome = 'seu-bucket-nome'  # Substitua pelo nome do seu bucket no Google Cloud Storage
#objeto_nome = 'dados.txt'  # Substitua pelo nome do arquivo no qual os dados serão armazenados

# Credenciais do Google Cloud Storage
# Certifique-se de configurar suas próprias credenciais de autenticação do Google Cloud
#credenciais = 'caminho/para/sua/credencial.json'

# Função para ler a saída serial e enviar para o Google Cloud Storage
def ler_serial_e_enviar():
    with serial.Serial(porta_serial, velocidade_serial) as ser:
        while True:
            # Lê uma linha da porta serial
            dados_serial = ser.readline().decode('utf-8').strip()

            # Extrai o número do início da linha
            numero = extrair_numero(dados_serial)


            if numero is not None:
                # Envia o número para o Google Cloud Storage
                print("")
               # enviar_para_google_cloud_storage(numero)

# Função para extrair o número do início da linha
def extrair_numero(linha):
    try:
        # Tenta converter o início da linha para um número
        numero = int(linha.split()[0])
        print(numero)
        return numero
    except (ValueError, IndexError):
        # Em caso de erro, retorna None
        return None

# Função para enviar dados para o Google Cloud Storage
def enviar_para_google_cloud_storage(dados):
    client = storage.Client.from_service_account_json(credenciais)
    bucket = client.bucket(bucket_nome)

    # Cria um objeto Blob e envia os dados para o Google Cloud Storage
    blob = bucket.blob(objeto_nome)
    blob.upload_from_string(str(dados), content_type='text/plain')

    print(f'Dados enviados para o Google Cloud Storage.')

if __name__ == '__main__':
    ler_serial_e_enviar()
