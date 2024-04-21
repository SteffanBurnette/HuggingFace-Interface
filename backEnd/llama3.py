import transformers
import torch

model_id = "meta-llama/Meta-Llama-3-8B-Instruct"

pipeline = transformers.pipeline(
  "text-generation",
  model="meta-llama/Meta-Llama-3-8B-Instruct",
  model_kwargs={"torch_dtype": torch.bfloat16},
  device="cpu",
)

def generate_response(prompt):
    output = pipeline(prompt, max_length=100, clean_up_tokenization_spaces=True)
    return output[0]["generated_text"]

response = generate_response("How can i fine tune the llama3 model")
print(response)