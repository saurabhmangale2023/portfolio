from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', extra='ignore')

    DB_URL: str
    REDIS_URL: str
    SECRET_KEY: str
    JWT_ALGORITHM: str = 'HS256'

    S3_ENDPOINT: str
    S3_ACCESS_KEY: str
    S3_SECRET_KEY: str
    S3_BUCKET: str
    S3_REGION: str = 'ap-south-1'

    FIREBASE_PROJECT_ID: str


settings = Settings()
