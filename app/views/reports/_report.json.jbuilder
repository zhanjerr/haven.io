json.extract! report, :id, :user_id, :sentiment, :created_at, :updated_at
json.url report_url(report, format: :json)
